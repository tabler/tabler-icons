import outlineStroke from 'svg-outline-stroke'
import { asyncForEach, getAllIcons, getCompileOptions, getPackageDir, HOME_DIR } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve, basename } from 'path'
import crypto from 'crypto'
import { glob } from 'glob'
import { optimize } from 'svgo'
import { fixOutline } from './fix-outline.mjs'
import os from 'os'

const DIR = getPackageDir('icons-webfont')

// Parallel processing with concurrency limit
const parallelLimit = async (items, fn, concurrency = os.cpus().length * 2) => {
  const results = []
  let index = 0
  
  const worker = async () => {
    while (index < items.length) {
      const i = index++
      results[i] = await fn(items[i], i)
    }
  }
  
  await Promise.all(Array(Math.min(concurrency, items.length)).fill(null).map(worker))
  return results
}

const strokes = {
  200: 1,
  300: 1.5,
  400: 2,
}

const buildOutline = async () => {
  const icons = getAllIcons(true)
  const compileOptions = getCompileOptions()
  
  // Process all strokes in parallel
  await Promise.all(Object.entries(strokes).map(async ([strokeName, stroke]) => {
    let filesList = {}
    
    for (const [type, typeIcons] of Object.entries(icons)) {
      fs.mkdirSync(resolve(DIR, `icons-outlined/${strokeName}/${type}`), { recursive: true })
      
      // Filter icons first
      const iconsToProcess = typeIcons.filter(({ name, unicode }) => {
        if (!unicode) return false
        if (compileOptions.includeIcons.length > 0 && compileOptions.includeIcons.indexOf(name) < 0) return false
        return true
      })
      
      // Collect filenames for later cleanup
      filesList[type] = iconsToProcess.map(({ name, unicode }) => `u${unicode.toUpperCase()}-${name}.svg`)
      
      // Process icons in parallel with concurrency limit
      let processed = 0
      let cached = 0
      const total = iconsToProcess.length
      
      await parallelLimit(iconsToProcess, async ({ name, content, unicode }) => {
        const filename = `u${unicode.toUpperCase()}-${name}.svg`
        const filePath = resolve(DIR, `icons-outlined/${strokeName}/${type}/${filename}`)
        
        // Check cache
        if (fs.existsSync(filePath)) {
          let cachedContent = fs.readFileSync(filePath, 'utf-8')
          let cachedHash = ''
          cachedContent = cachedContent.replace(/<!--\!cache:([a-z0-9]+)-->/, (m, hash) => {
            cachedHash = hash
            return ''
          })
          
          if (crypto.createHash('sha1').update(cachedContent).digest("hex") === cachedHash) {
            cached++
            return
          }
        }
        
        // Prepare content
        content = content
          .replace('width="24"', 'width="1000"')
          .replace('height="24"', 'height="1000"')
          .replace('stroke-width="2"', `stroke-width="${stroke}"`)
        
        try {
          const outlined = await outlineStroke(content, {
            optCurve: true,
            steps: 4,
            round: 0,
            centerHorizontally: true,
            fixedWidth: false,
            color: 'black'
          })
          
          // Fix outline direction (using JS instead of fontforge)
          const fixed = fixOutline(outlined)
          
          // Optimize with svgo (in memory, no subprocess)
          const optimized = optimize(fixed, { multipass: true }).data
          
          // Prepare final content with hash
          const finalContent = optimized.replace(/\n/g, ' ').trim()
          const hashString = `<!--!cache:${crypto.createHash('sha1').update(finalContent).digest("hex")}-->`
          
          // Save file
          fs.writeFileSync(filePath, finalContent + hashString, 'utf-8')
          
          processed++
        } catch (error) {
          console.error(`\nError processing ${strokeName}/${type}/${name}:`, error.message)
        }
      }, 32) // 32 concurrent tasks
      
      console.log(`Stroke ${strokeName}/${type}: ${processed} processed, ${cached} cached`)
    }

    // Remove old files
    for (const [type] of Object.entries(icons)) {
      const existedFiles = (await glob(resolve(DIR, `icons-outlined/${strokeName}/${type}/*.svg`))).map(file => basename(file))
      existedFiles.forEach(file => {
        if (filesList[type].indexOf(file) === -1) {
          console.log('Remove:', file)
          fs.unlinkSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${file}`))
        }
      })
    }

    // Copy icons to all directory
    fs.mkdirSync(resolve(DIR, `icons-outlined/${strokeName}/all`), { recursive: true })
    
    for (const [type, typeIcons] of Object.entries(icons)) {
      for (const { name, unicode } of typeIcons) {
        if (!unicode) continue
        const iconName = `u${unicode.toUpperCase()}-${name}`
        const srcPath = resolve(DIR, `icons-outlined/${strokeName}/${type}/${iconName}.svg`)
        
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(
            srcPath,
            resolve(DIR, `icons-outlined/${strokeName}/all/${iconName}${type !== 'outline' ? `-${type}` : ''}.svg`)
          )
        }
      }
    }
    
    console.log(`Stroke ${strokeName}: completed`)
  }))

  console.log('Done')
}

await buildOutline()

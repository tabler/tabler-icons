import outlineStroke from 'svg-outline-stroke'
import { asyncForEach, getAllIcons, getCompileOptions, getPackageDir, HOME_DIR } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve, basename } from 'path'
import crypto from 'crypto'
import { glob } from 'glob'
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

  // Process all strokes in parallel (200, 300, 400 at once)
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
      
      // Collect filenames for later cleanup (Set for O(1) lookup)
      filesList[type] = new Set(iconsToProcess.map(({ name, unicode }) => `u${unicode.toUpperCase()}-${name}.svg`))
      
      // Process icons in parallel with concurrency limit
      let processed = 0
      let cached = 0
      const total = iconsToProcess.length
      const startTime = Date.now()
      
      // Progress update interval (every 50 icons to avoid console spam)
      let lastProgress = 0
      const showProgress = () => {
        const done = processed + cached
        if (done - lastProgress >= 50 || done === total) {
          const percent = Math.round((done / total) * 100)
          const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
          process.stdout.write(`\r[${strokeName}/${type}] ${done}/${total} (${percent}%) - ${elapsed}s`.padEnd(60))
          lastProgress = done
        }
      }
      
      await parallelLimit(iconsToProcess, async ({ name, content, unicode }) => {
        const filename = `u${unicode.toUpperCase()}-${name}.svg`
        const filePath = resolve(DIR, `icons-outlined/${strokeName}/${type}/${filename}`)
        
        // Check cache (try/catch faster than existsSync + readFileSync)
        try {
          const cachedContent = fs.readFileSync(filePath, 'utf-8')
          let cachedHash = ''
          const contentWithoutHash = cachedContent.replace(/<!--\!cache:([a-z0-9]+)-->/, (m, hash) => {
            cachedHash = hash
            return ''
          })
          
          if (cachedHash && crypto.createHash('sha1').update(contentWithoutHash).digest("hex") === cachedHash) {
            cached++
            showProgress()
            return
          }
        } catch (e) {
          // File doesn't exist, will be created
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
          
          // Prepare final content with hash
          const finalContent = fixed.replace(/\n/g, ' ').trim()
          const hashString = `<!--!cache:${crypto.createHash('sha1').update(finalContent).digest("hex")}-->`
          
          // Save file
          fs.writeFileSync(filePath, finalContent + hashString, 'utf-8')
          
          processed++
          showProgress()
        } catch (error) {
          console.error(`\nError processing ${strokeName}/${type}/${name}:`, error.message)
        }
      }, 64) // 64 concurrent tasks
      
      const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
      console.log(`\n[${strokeName}/${type}] Done: ${processed} processed, ${cached} cached in ${totalTime}s`)
    }

    // Remove old files
    for (const [type] of Object.entries(icons)) {
      const existedFiles = (await glob(resolve(DIR, `icons-outlined/${strokeName}/${type}/*.svg`))).map(file => basename(file))
      existedFiles.forEach(file => {
        if (!filesList[type].has(file)) {
          console.log('Remove:', file)
          fs.unlinkSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${file}`))
        }
      })
    }

    // Copy icons to all directory (parallel)
    fs.mkdirSync(resolve(DIR, `icons-outlined/${strokeName}/all`), { recursive: true })
    
    const copyTasks = []
    for (const [type, typeIcons] of Object.entries(icons)) {
      for (const { name, unicode } of typeIcons) {
        if (!unicode) continue
        copyTasks.push({ type, name, unicode })
      }
    }
    
    await parallelLimit(copyTasks, async ({ type, name, unicode }) => {
      const iconName = `u${unicode.toUpperCase()}-${name}`
      const srcPath = resolve(DIR, `icons-outlined/${strokeName}/${type}/${iconName}.svg`)
      const destPath = resolve(DIR, `icons-outlined/${strokeName}/all/${iconName}${type !== 'outline' ? `-${type}` : ''}.svg`)
      
      try {
        fs.copyFileSync(srcPath, destPath)
      } catch (e) {
        // Source file doesn't exist, skip
      }
    }, 128) // High concurrency for simple I/O
    
    console.log(`Stroke ${strokeName}: completed`)
  }))

  console.log('Done')
}

await buildOutline()

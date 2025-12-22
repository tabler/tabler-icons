import { getAllIcons, getCompileOptions, getPackageDir, blankSquare, strokes } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve, basename } from 'path'
import { glob } from 'glob'
import SVGPathCommander, { parsePathString, pathToString, splitPath } from 'svg-path-commander'
import spo from 'svg-path-outline'
import paper from 'paper';

paper.setup();

const DIR = getPackageDir('icons-webfont')

// Function to calculate the end point of a segment
function getEndPoint(segment, startPoint) {
  const [command, ...params] = segment;
  const upperCommand = command.toUpperCase();

  switch (upperCommand) {
    case 'M':
      return [params[0], params[1]];
    case 'L':
      return [params[0], params[1]];
    case 'H':
      return [params[0], startPoint[1]];
    case 'V':
      return [startPoint[0], params[0]];
    case 'C':
      // Cubic Bezier: C x1 y1 x2 y2 x y
      // Końcowy punkt to ostatnie dwie wartości
      return [params[4], params[5]];
    case 'S':
      // Smooth Cubic Bezier: S x2 y2 x y
      return [params[2], params[3]];
    case 'Q':
      // Quadratic Bezier: Q x1 y1 x y
      return [params[2], params[3]];
    case 'T':
      // Smooth Quadratic Bezier: T x y
      return [params[0], params[1]];
    case 'A':
      // Arc: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
      return [params[5], params[6]];
    case 'Z':
      return startPoint;
    default:
      return startPoint;
  }
}

// Function to split a single path into individual paths
// Uses svg-path-commander's splitPath if available, otherwise falls back to custom implementation
function splitPathIntoIndividualPaths(pathString) {
  // Try to use svg-path-commander's splitPath function if available
  if (typeof splitPath === 'function') {
    try {
      // Ensure the path is in absolute format
      const absolutePath = new SVGPathCommander(pathString).toAbsolute().toString()
      const paths = splitPath(absolutePath)
      // splitPath returns array of path strings, which is exactly what we need
      return paths
    } catch (error) {
      // Fall back to custom implementation if splitPath fails
      console.warn('splitPath failed, using custom implementation:', error.message)
    }
  }
  
  // Custom implementation (fallback or if splitPath is not available)
  // Ensure the path is in absolute format
  const absolutePath = new SVGPathCommander(pathString).toAbsolute().toString()
  const pathArray = parsePathString(absolutePath)
  const individualPaths = []
  let currentPoint = [0, 0]
  let pathStartPoint = [0, 0]
  
  for (let i = 0; i < pathArray.length; i++) {
    const segment = pathArray[i]
    const [command, ...params] = segment
    const upperCommand = command.toUpperCase()
    
    if (upperCommand === 'M') {
      // New start point
      currentPoint = [params[0], params[1]]
      pathStartPoint = currentPoint
      
      // Check if next segment exists
      if (i + 1 < pathArray.length) {
        const nextSegment = pathArray[i + 1]
        const nextCommand = nextSegment[0].toUpperCase()
        
        // If next segment is not M, create a path M + next segment
        if (nextCommand !== 'M') {
          const newPath = pathToString([
            ['M', currentPoint[0], currentPoint[1]],
            nextSegment
          ])
          individualPaths.push(newPath)
          
          // Update currentPoint
          currentPoint = getEndPoint(nextSegment, currentPoint)
          i++ // Skip next segment
        }
      }
    } else if (upperCommand === 'Z') {
      // Close path - close the last path if it exists
      if (individualPaths.length > 0) {
        let lastPath = individualPaths[individualPaths.length - 1]
        // Check if path doesn't already have Z at the end
        if (!lastPath.trim().endsWith('Z') && !lastPath.trim().endsWith('z')) {
          // Add Z to the last path
          const lastPathArray = parsePathString(lastPath)
          lastPathArray.push(['Z'])
          lastPath = pathToString(lastPathArray)
          individualPaths[individualPaths.length - 1] = lastPath
        }
      }
      currentPoint = pathStartPoint
    } else {
      // Any other segment creates a new path starting with M
      const newPath = pathToString([
        ['M', currentPoint[0], currentPoint[1]],
        segment
      ])
      individualPaths.push(newPath)
      
      // Update currentPoint
      currentPoint = getEndPoint(segment, currentPoint)
    }
  }
  
  return individualPaths
}

// Function to split all paths in SVG
const splitPaths = (svgBuffer) => {
  svgBuffer = svgBuffer.replaceAll(/<path([^>]*)d="([^"]*)"([^>]*)>/g, (match, p1, p2, p3) => {
    const absolutePath = new SVGPathCommander(p2).toAbsolute().toString()

    // Split path into individual paths
    const individualPaths = splitPathIntoIndividualPaths(absolutePath)
    
    // If path was split, create separate <path> elements
    if (individualPaths.length > 1) {
      // Create separate path elements for each path
      const newPaths = individualPaths.map(path => {
        return `<path${p1}d="${path}"${p3}>`
      })
      
      return newPaths.join('\n')
    } else {
      // If not split, return original path
      return match
    }
  })

  return svgBuffer
}

const offsetPath = (svgBuffer, offset) => {
  svgBuffer = svgBuffer.replaceAll(/<path[^>]*d="([^"]*)"/g, (match, p1) => {
    const absolutePath = new SVGPathCommander(p1).toAbsolute().toString()

    let newPath = spo(absolutePath, offset, {
      outside: true,
      joints: 0
    })

    if (!newPath) {
      console.error('absolutePath', absolutePath)
      throw new Error('newPath', newPath)
    }

    return `<path d="${newPath}"`
  })

  svgBuffer = svgBuffer.replaceAll(/stroke="[^"]*"/g, 'stroke="none"')
  svgBuffer = svgBuffer.replaceAll(/fill="[^"]*"/g, 'fill="black"')

  return svgBuffer
}

const reorientPath = (svgBuffer) => {
  // Reorient paths by reversing their direction
  // This ensures consistent winding order for fill operations
  svgBuffer = svgBuffer.replaceAll(/<path[^>]*d="([^"]*)"/g, (match, p1) => {
    try {
      const pathCommander = new SVGPathCommander(p1)
      // Reverse the path to change its orientation
      const reversedPath = pathCommander.reverse().toString()
      return `<path d="${reversedPath}"`
    } catch (error) {
      // If reversal fails, return original path
      console.warn('Failed to reorient path:', error.message)
      return match
    }
  })
  
  return svgBuffer
}

const unionPaths = (svgBuffer) => {
  // Extract all path elements to check count
  const root = paper.project.importSVG(svgBuffer);
  const paths = root.getItems({ class: paper.PathItem });

  // Upewnij się, że są zamknięte (boolean ops tego zwykle wymagają)
  for (const p of paths) {
    if (!p.closed) p.closePath();
  }

  // Iteracyjny union
  let merged = paths[0];
  for (let i = 1; i < paths.length; i++) {
    merged = merged.unite(paths[i]);
  }

  // Export do SVG i wyciągnięcie d
  const outSvg = merged.exportSVG({ asString: true });

  // Znajdź wszystkie path jako jedną grupę
  // Wyrażenie dopasowuje wszystkie path obok siebie (z opcjonalnymi białymi znakami między nimi)
  // Użyj + z non-greedy, żeby dopasować wszystkie path jako jedną grupę
  const allPathsRegex = /(<path[^>]*>[\s\n\r\t]*)+/;
  const pathMatch = svgBuffer.match(allPathsRegex);
  
  if (!pathMatch || !pathMatch[0]) {
    return svgBuffer;
  }

  // Zamień wszystkie path razem na jeden nowy path
  // Użyj replace z dokładnym dopasowaniem match[0], żeby zamienić tylko raz
  // i upewnij się, że nie ma flagi g, która mogłaby powodować wielokrotne zamienianie
  const result = svgBuffer.replace(pathMatch[0], outSvg);
  
  return result;
}

const buildOutline = async () => {
  const icons = getAllIcons(true)
  const compileOptions = getCompileOptions()

  // Process strokes sequentially (200, 300, 400 one by one)
  for (const [strokeName, stroke] of Object.entries(strokes)) {
    const type = 'outline'
    const typeIcons = icons.outline
    let filesList = {}

    fs.mkdirSync(resolve(DIR, `icons-outlined/${strokeName}/${type}`), { recursive: true })
    
    // Filter icons first
    const iconsToProcess = typeIcons.filter(({ name, unicode }) => {
      if (!unicode) return false
      if (compileOptions.includeIcons.length > 0 && compileOptions.includeIcons.indexOf(name) < 0) return false
      return true
    })
    
    // Collect filenames for later cleanup (Set for O(1) lookup)
    filesList[type] = new Set(iconsToProcess.map(({ name, unicode }) => `u${unicode.toUpperCase()}-${name}.svg`))
    
    // Process icons sequentially
    let processed = 0
    const total = iconsToProcess.length
    const startTime = Date.now()
    
    // Progress update interval (every 50 icons to avoid console spam)
    let lastProgress = 0
    const showProgress = () => {
      if (processed - lastProgress >= 50 || processed === total) {
        const percent = Math.round((processed / total) * 100)
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
        process.stdout.write(`\r[${strokeName}/${type}] ${processed}/${total} (${percent}%) - ${elapsed}s`.padEnd(60))
        lastProgress = processed
      }
    }
    
    for (const { name, content, unicode } of iconsToProcess) {
      const filename = `u${unicode.toUpperCase()}-${name}.svg`
      const filePath = resolve(DIR, `icons-outlined/${strokeName}/${type}/${filename}`)
      
      try {
        // Prepare content: modify size and stroke-width
        let svgContent = content
          .replace(blankSquare, '')
          // .replace('width="24"', 'width="1000"')
          // .replace('height="24"', 'height="1000"')
          .replace('stroke-width="2"', `stroke-width="${stroke}"`)

        // Convert stroke to fill using the new script
        // offset is half of stroke width (0.5 for stroke-width 1, 0.75 for 1.5, 1 for 2)
        const offset = stroke / 2 - 0.001

        svgContent = splitPaths(svgContent)
        svgContent = offsetPath(svgContent, offset)
        // svgContent = reorientPath(svgContent)
        svgContent = unionPaths(svgContent)

        // Save file
        fs.writeFileSync(filePath, svgContent, 'utf-8')
        
        processed++
        showProgress()
      } catch (error) {
        console.error(`\nError processing ${strokeName}/${type}/${name}:`, error.message)
        console.error(error.stack)
      }
    }
    
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
    console.log(`\n[${strokeName}/${type}] Done: ${processed} processed in ${totalTime}s`)

    // Remove old files
    const existedFiles = (await glob(resolve(DIR, `icons-outlined/${strokeName}/${type}/*.svg`))).map(file => basename(file))
    existedFiles.forEach(file => {
      if (!filesList[type].has(file)) {
        console.log('Remove:', file)
        fs.unlinkSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${file}`))
      }
    })

    console.log(`Stroke ${strokeName}: completed`)
  }

  console.log('Done')
}

await buildOutline()

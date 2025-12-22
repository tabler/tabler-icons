import fs from 'fs'
import SVGPathCommander from 'svg-path-commander'

/**
 * Fix SVG outline directions - replacement for fontforge fix-outline.py
 * Operations:
 * 1. Round coordinates
 * 2. Correct path direction (outer paths counterclockwise, inner paths clockwise)
 */
export function fixOutline(svgContent) {
  // Extract all path elements
  const pathRegex = /<path[^>]*\sd="([^"]+)"[^>]*>/g
  
  let result = svgContent.replace(pathRegex, (match, pathData) => {
    try {
      // Round coordinates to integers (like fontforge's round()) and optimize
      const commander = new SVGPathCommander(pathData, { round: 0 })
      const optimized = commander.optimize().toString()
      
      // Check and correct direction
      // For font glyphs: outer paths should be counterclockwise
      const segments = new SVGPathCommander(optimized).segments
      const isClockwise = getPathDirection(segments)
      
      let finalPath = optimized
      
      // If path is clockwise, reverse it to make it counterclockwise (standard for outer contours)
      if (isClockwise) {
        finalPath = new SVGPathCommander(optimized, { round: 0 }).reverse().toString()
      }
      
      return match.replace(pathData, finalPath)
    } catch (e) {
      console.warn('Could not process path:', e.message)
      return match
    }
  })
  
  return result
}

/**
 * Calculate path direction using shoelace formula
 * Returns true if clockwise, false if counterclockwise
 */
function getPathDirection(segments) {
  let sum = 0
  let points = []
  
  // Extract points from segments
  for (const seg of segments) {
    if (seg[0] === 'M' || seg[0] === 'L') {
      points.push({ x: seg[1], y: seg[2] })
    } else if (seg[0] === 'C') {
      // For curves, use the endpoint
      points.push({ x: seg[5], y: seg[6] })
    } else if (seg[0] === 'Q') {
      points.push({ x: seg[3], y: seg[4] })
    } else if (seg[0] === 'Z' || seg[0] === 'z') {
      // Close path - use first point
      if (points.length > 0) {
        points.push(points[0])
      }
    }
  }
  
  // Calculate signed area using shoelace formula
  for (let i = 0; i < points.length - 1; i++) {
    sum += (points[i + 1].x - points[i].x) * (points[i + 1].y + points[i].y)
  }
  
  // Positive = clockwise, negative = counterclockwise (in SVG coordinate system where Y increases downward)
  return sum > 0
}

/**
 * Process SVG file
 */
export function fixOutlineFile(inputPath, outputPath = null) {
  const content = fs.readFileSync(inputPath, 'utf-8')
  const fixed = fixOutline(content)
  fs.writeFileSync(outputPath || inputPath, fixed, 'utf-8')
  return fixed
}

// CLI support
if (process.argv[1] && process.argv[1].endsWith('fix-outline.mjs')) {
  const file = process.argv[2]
  if (file) {
    console.log(`Correcting outline for ${file}`)
    fixOutlineFile(file)
    console.log('Finished fixing svg outline directions!')
  }
}

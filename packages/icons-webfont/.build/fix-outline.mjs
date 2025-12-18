import fs from 'fs'
import SVGPathCommander from 'svg-path-commander'

/**
 * Fix SVG outline directions for font glyphs
 * For TrueType fonts in SVG coordinate system (Y down):
 * - Outer paths (even depth): clockwise
 * - Inner paths/holes (odd depth): counterclockwise
 */
export function fixOutline(svgContent) {
  // Change fill-rule from evenodd to nonzero for correct hole-in-hole handling
  svgContent = svgContent.replace(/fill-rule="evenodd"/g, 'fill-rule="nonzero"')
  
  const pathRegex = /<path[^>]*\sd="([^"]+)"[^>]*>/g

  return svgContent.replace(pathRegex, (match, pathData) => {
    try {
      const absolutePathData = new SVGPathCommander(pathData, { round: 0 }).toAbsolute().toString()
      const subpaths = absolutePathData.match(/M[^M]*/g)

      if (!subpaths || subpaths.length === 0) return match

      if (subpaths.length === 1) {
        const segments = new SVGPathCommander(absolutePathData).segments
        const isClockwise = getPathDirection(segments)
        const resultPath = isClockwise ? absolutePathData : reversePath(absolutePathData, segments)
        return match.replace(pathData, new SVGPathCommander(resultPath, { round: 0 }).optimize().toString())
      }

      // Analyze all subpaths in one pass
      const infos = subpaths.map((sp, idx) => {
        const segments = new SVGPathCommander(sp.trim()).segments
        const { bbox, isClockwise } = analyzeSegments(segments)
        const bboxArea = bbox.w * bbox.h
        // Calculate actual area using shoelace formula
        const actualArea = calculateArea(segments)
        // If area/bboxArea ratio is low (<60%), it's likely a line/shape, not a circle/hole
        const isLikelyHole = bboxArea > 0 && (actualArea / bboxArea) > 0.6
        return { idx, path: sp.trim(), segments, bbox, isClockwise, area: bboxArea, actualArea, isLikelyHole }
      })

      // Find direct parent for each subpath (smallest container)
      // Always check containment - if contained, it's a hole regardless of ratio
      const parents = infos.map((info, i) => {
        let parent = null
        let parentArea = Infinity
        for (let j = 0; j < infos.length; j++) {
          if (i !== j && bboxContains(infos[j].bbox, info.bbox)) {
            // This subpath contains info, check if it's the smallest
            if (infos[j].area < parentArea) {
              parent = j
              parentArea = infos[j].area
            }
          }
        }
        return parent
      })

      // Calculate depth by traversing up the tree
      const getDepth = (idx) => {
        let depth = 0
        let current = parents[idx]
        while (current !== null) {
          depth++
          current = parents[current]
        }
        return depth
      }

      // Fix directions: each subpath that is a hole in its direct parent should be CCW
      // If contained by another subpath, it's always a hole (CCW), regardless of ratio
      // This works correctly with nonzero fill-rule: holes are always CCW relative to their container
      const corrected = infos.map((info, i) => {
        const parent = parents[i]
        // If no parent, it's a root shape -> should be CW
        // If has parent, it's a hole in that parent -> should be CCW
        const shouldBeClockwise = parent === null
        
        return info.isClockwise === shouldBeClockwise
          ? info.path
          : reversePath(info.path, info.segments)
      })

      return match.replace(pathData, corrected.join(' '))
    } catch (e) {
      return match
    }
  })
}

/**
 * Calculate actual area using shoelace formula
 */
function calculateArea(segments) {
  let sum = 0
  let prevX = 0, prevY = 0, firstX = 0, firstY = 0

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const cmd = seg[0]
    let x, y

    if (cmd === 'M') {
      x = seg[1]; y = seg[2]
      firstX = x; firstY = y
    } else if (cmd === 'L') {
      x = seg[1]; y = seg[2]
    } else if (cmd === 'H') {
      x = seg[1]; y = prevY
    } else if (cmd === 'V') {
      x = prevX; y = seg[1]
    } else if (cmd === 'C') {
      x = seg[5]; y = seg[6]
    } else if (cmd === 'Q') {
      x = seg[3]; y = seg[4]
    } else if (cmd === 'Z' || cmd === 'z') {
      x = firstX; y = firstY
    } else {
      continue
    }

    if (i > 0) sum += (x - prevX) * (y + prevY)
    prevX = x; prevY = y
  }

  return Math.abs(sum / 2)
}

/**
 * Analyze segments - get bbox and direction in single pass
 */
function analyzeSegments(segments) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  let sum = 0, prevX = 0, prevY = 0, firstX = 0, firstY = 0

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const cmd = seg[0]
    let x, y

    if (cmd === 'M') {
      x = seg[1]; y = seg[2]
      firstX = x; firstY = y
    } else if (cmd === 'L') {
      x = seg[1]; y = seg[2]
    } else if (cmd === 'H') {
      x = seg[1]; y = prevY
    } else if (cmd === 'V') {
      x = prevX; y = seg[1]
    } else if (cmd === 'C') {
      // Update bbox with control points too
      for (let j = 1; j <= 5; j += 2) {
        if (seg[j] < minX) minX = seg[j]
        if (seg[j] > maxX) maxX = seg[j]
      }
      for (let j = 2; j <= 6; j += 2) {
        if (seg[j] < minY) minY = seg[j]
        if (seg[j] > maxY) maxY = seg[j]
      }
      x = seg[5]; y = seg[6]
    } else if (cmd === 'Q') {
      if (seg[1] < minX) minX = seg[1]
      if (seg[1] > maxX) maxX = seg[1]
      if (seg[2] < minY) minY = seg[2]
      if (seg[2] > maxY) maxY = seg[2]
      x = seg[3]; y = seg[4]
    } else if (cmd === 'Z' || cmd === 'z') {
      x = firstX; y = firstY
    } else {
      continue
    }

    // Update bbox
    if (x < minX) minX = x
    if (x > maxX) maxX = x
    if (y < minY) minY = y
    if (y > maxY) maxY = y

    // Shoelace formula for direction
    if (i > 0) sum += (x - prevX) * (y + prevY)
    prevX = x; prevY = y
  }

  return {
    bbox: { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY },
    isClockwise: sum > 0
  }
}

/**
 * Check if outer bbox contains inner bbox
 */
function bboxContains(outer, inner) {
  return outer.minX <= inner.minX + 1 &&
    outer.minY <= inner.minY + 1 &&
    outer.maxX >= inner.maxX - 1 &&
    outer.maxY >= inner.maxY - 1 &&
    inner.w < outer.w - 1 &&
    inner.h < outer.h - 1
}

/**
 * Reverse path direction
 */
function reversePath(pathData, segments) {
  if (!segments) segments = new SVGPathCommander(pathData, { round: 0 }).toAbsolute().segments
  if (segments.length === 0) return pathData

  const points = []
  let startX = 0, startY = 0, curX = 0, curY = 0

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const cmd = seg[0]
    if (cmd === 'M') {
      startX = curX = seg[1]; startY = curY = seg[2]
      points.push({ cmd: 'M', x: seg[1], y: seg[2] })
    } else if (cmd === 'L') {
      curX = seg[1]; curY = seg[2]
      points.push({ cmd: 'L', x: seg[1], y: seg[2] })
    } else if (cmd === 'H') {
      curX = seg[1]
      points.push({ cmd: 'L', x: curX, y: curY })
    } else if (cmd === 'V') {
      curY = seg[1]
      points.push({ cmd: 'L', x: curX, y: curY })
    } else if (cmd === 'C') {
      curX = seg[5]; curY = seg[6]
      points.push({ cmd: 'C', x1: seg[1], y1: seg[2], x2: seg[3], y2: seg[4], x: seg[5], y: seg[6] })
    } else if (cmd === 'Q') {
      curX = seg[3]; curY = seg[4]
      points.push({ cmd: 'Q', x1: seg[1], y1: seg[2], x: seg[3], y: seg[4] })
    } else if (cmd === 'Z' || cmd === 'z') {
      points.push({ cmd: 'Z', x: startX, y: startY })
    }
  }

  let hasClose = false
  if (points.length > 0 && points[points.length - 1].cmd === 'Z') {
    hasClose = true
    points.pop()
  }

  if (points.length === 0) return pathData

  const last = points[points.length - 1]
  const reversed = [`M${last.x ?? 0} ${last.y ?? 0}`]

  for (let i = points.length - 1; i > 0; i--) {
    const curr = points[i], prev = points[i - 1]
    const px = prev.x ?? 0, py = prev.y ?? 0

    if (curr.cmd === 'L' || curr.cmd === 'M') {
      reversed.push(`L${px} ${py}`)
    } else if (curr.cmd === 'C') {
      reversed.push(`C${curr.x2} ${curr.y2} ${curr.x1} ${curr.y1} ${px} ${py}`)
    } else if (curr.cmd === 'Q') {
      reversed.push(`Q${curr.x1} ${curr.y1} ${px} ${py}`)
    }
  }

  if (hasClose) reversed.push('Z')
  return reversed.join(' ')
}

export function fixOutlineFile(inputPath, outputPath = null) {
  const content = fs.readFileSync(inputPath, 'utf-8')
  const fixed = fixOutline(content)
  fs.writeFileSync(outputPath || inputPath, fixed, 'utf-8')
  return fixed
}

if (process.argv[1]?.endsWith('fix-outline.mjs')) {
  const file = process.argv[2]
  if (file) {
    console.log(`Correcting outline for ${file}`)
    fixOutlineFile(file)
    console.log('Finished!')
  }
}
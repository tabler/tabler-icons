import svgpath from 'svgpath';
import { parseSync, stringify } from 'svgson';

// Outline icons are drawn with plain strokes only, so a `stroke-dasharray`
// coming from the design tool has to be baked into the geometry: every dash
// becomes its own open path. Lines and béziers are split exactly (de
// Casteljau), arcs stay arcs, so a dashed circle ends up looking like the
// hand-drawn `circle-dashed`.

const EPSILON = 0.001;
const LENGTH_SAMPLES = 256;

const DASH_ATTRS = ['stroke-dasharray', 'stroke-dashoffset'];
const SHAPE_ATTRS = {
  path: ['d'],
  line: ['x1', 'y1', 'x2', 'y2'],
  polyline: ['points'],
  polygon: ['points'],
  circle: ['cx', 'cy', 'r'],
  ellipse: ['cx', 'cy', 'rx', 'ry'],
  rect: ['x', 'y', 'width', 'height', 'rx', 'ry'],
};

const num = (value, fallback = 0) => {
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const fmt = (value) => {
  const rounded = Math.round(value * 1000) / 1000;
  return Object.is(rounded, -0) ? '0' : String(rounded);
};

const samePoint = (a, b) => Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON;

// --- shapes to path data (same start point and direction as the SVG spec,
// so the dash phase matches what browsers and design tools render) ---

const shapeToPathData = (name, attrs) => {
  switch (name) {
    case 'path':
      return attrs.d || '';
    case 'line':
      return `M${num(attrs.x1)} ${num(attrs.y1)}L${num(attrs.x2)} ${num(attrs.y2)}`;
    case 'polyline':
    case 'polygon': {
      const coords = (attrs.points || '')
        .trim()
        .split(/[\s,]+/)
        .map(Number);
      const points = [];
      for (let i = 0; i + 1 < coords.length; i += 2) points.push(`${coords[i]} ${coords[i + 1]}`);
      if (!points.length) return '';
      return `M${points.join('L')}${name === 'polygon' ? 'Z' : ''}`;
    }
    case 'circle':
    case 'ellipse': {
      const cx = num(attrs.cx),
        cy = num(attrs.cy),
        rx = name === 'circle' ? num(attrs.r) : num(attrs.rx, num(attrs.ry)),
        ry = name === 'circle' ? rx : num(attrs.ry, rx);
      return (
        `M${cx + rx} ${cy}` +
        `A${rx} ${ry} 0 0 1 ${cx} ${cy + ry}` +
        `A${rx} ${ry} 0 0 1 ${cx - rx} ${cy}` +
        `A${rx} ${ry} 0 0 1 ${cx} ${cy - ry}` +
        `A${rx} ${ry} 0 0 1 ${cx + rx} ${cy}Z`
      );
    }
    case 'rect': {
      const x = num(attrs.x),
        y = num(attrs.y),
        w = num(attrs.width),
        h = num(attrs.height);
      let rx = attrs.rx !== undefined ? num(attrs.rx) : num(attrs.ry),
        ry = attrs.ry !== undefined ? num(attrs.ry) : rx;
      rx = Math.min(rx, w / 2);
      ry = Math.min(ry, h / 2);
      if (!rx || !ry) return `M${x} ${y}H${x + w}V${y + h}H${x}Z`;
      const arc = (ex, ey) => `A${rx} ${ry} 0 0 1 ${ex} ${ey}`;
      return (
        `M${x + rx} ${y}H${x + w - rx}${arc(x + w, y + ry)}` +
        `V${y + h - ry}${arc(x + w - rx, y + h)}` +
        `H${x + rx}${arc(x, y + h - ry)}` +
        `V${y + ry}${arc(x + rx, y)}Z`
      );
    }
    default:
      return null;
  }
};

// --- segments ---

const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

// returns the control points of the part of a bézier between t0 and t1
const subBezier = (points, t0, t1) => {
  const splitAt = (pts, t) => {
    const left = [pts[0]],
      right = [pts[pts.length - 1]];
    let level = pts;
    while (level.length > 1) {
      const next = [];
      for (let i = 0; i < level.length - 1; i++) next.push(lerp(level[i], level[i + 1], t));
      left.push(next[0]);
      right.unshift(next[next.length - 1]);
      level = next;
    }
    return [left, right];
  };

  const [head] = splitAt(points, t1);
  if (t1 < EPSILON) return head.map(() => points[0]);
  return splitAt(head, t0 / t1)[1];
};

const bezierPoint = (points, t) => subBezier(points, 0, t).at(-1);

// endpoint to center parametrization (SVG spec, appendix B.2.4)
const arcCenter = (p0, rx, ry, angle, large, sweep, p1) => {
  const phi = (angle * Math.PI) / 180,
    cos = Math.cos(phi),
    sin = Math.sin(phi);
  const dx = (p0[0] - p1[0]) / 2,
    dy = (p0[1] - p1[1]) / 2;
  const x1 = cos * dx + sin * dy,
    y1 = -sin * dx + cos * dy;

  rx = Math.abs(rx);
  ry = Math.abs(ry);
  const lambda = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }

  const num2 = rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1;
  const den = rx * rx * y1 * y1 + ry * ry * x1 * x1;
  let coef = Math.sqrt(Math.max(0, num2 / den));
  if (large === sweep) coef = -coef;
  const cxp = (coef * rx * y1) / ry,
    cyp = (-coef * ry * x1) / rx;

  const cx = cos * cxp - sin * cyp + (p0[0] + p1[0]) / 2,
    cy = sin * cxp + cos * cyp + (p0[1] + p1[1]) / 2;

  const vecAngle = (ux, uy, vx, vy) => Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy);
  const theta = vecAngle(1, 0, (x1 - cxp) / rx, (y1 - cyp) / ry);
  let delta = vecAngle((x1 - cxp) / rx, (y1 - cyp) / ry, (-x1 - cxp) / rx, (-y1 - cyp) / ry);
  if (!sweep && delta > 0) delta -= 2 * Math.PI;
  if (sweep && delta < 0) delta += 2 * Math.PI;

  return { cx, cy, rx, ry, phi, angle, theta, delta, sweep };
};

const arcPoint = (arc, theta) => {
  const cos = Math.cos(arc.phi),
    sin = Math.sin(arc.phi);
  const x = arc.rx * Math.cos(theta),
    y = arc.ry * Math.sin(theta);
  return [arc.cx + cos * x - sin * y, arc.cy + sin * x + cos * y];
};

// builds a length table so a distance along the segment can be mapped to t
const withLengthTable = (segment) => {
  const table = [0];
  let previous = segment.point(0),
    length = 0;
  for (let i = 1; i <= LENGTH_SAMPLES; i++) {
    const current = segment.point(i / LENGTH_SAMPLES);
    length += Math.hypot(current[0] - previous[0], current[1] - previous[1]);
    table.push(length);
    previous = current;
  }

  segment.length = length;
  segment.tAt = (distance) => {
    if (distance <= 0) return 0;
    if (distance >= length) return 1;
    let low = 0,
      high = LENGTH_SAMPLES;
    while (high - low > 1) {
      const mid = (low + high) >> 1;
      if (table[mid] < distance) low = mid;
      else high = mid;
    }
    const span = table[high] - table[low];
    return (low + (span ? (distance - table[low]) / span : 0)) / LENGTH_SAMPLES;
  };
  return segment;
};

const lineSegment = (p0, p1) => ({
  start: p0,
  end: p1,
  length: Math.hypot(p1[0] - p0[0], p1[1] - p0[1]),
  tAt(distance) {
    return this.length ? Math.min(1, Math.max(0, distance / this.length)) : 0;
  },
  point: (t) => lerp(p0, p1, t),
  slice: (t0, t1) => {
    const end = lerp(p0, p1, t1);
    return [`L${fmt(end[0])} ${fmt(end[1])}`];
  },
});

const bezierSegment = (points) =>
  withLengthTable({
    start: points[0],
    end: points.at(-1),
    point: (t) => bezierPoint(points, t),
    slice: (t0, t1) => {
      const sub = subBezier(points, t0, t1).slice(1);
      const command = points.length === 4 ? 'C' : 'Q';
      return [command + sub.map((p) => `${fmt(p[0])} ${fmt(p[1])}`).join(' ')];
    },
  });

const arcSegment = (p0, rx, ry, angle, large, sweep, p1) => {
  const arc = arcCenter(p0, rx, ry, angle, large, sweep, p1);
  const thetaAt = (t) => arc.theta + arc.delta * t;
  const segment = {
    start: p0,
    end: p1,
    point: (t) => (t <= 0 ? p0 : t >= 1 ? p1 : arcPoint(arc, thetaAt(t))),
    slice: (t0, t1) => {
      const end = t1 >= 1 ? p1 : arcPoint(arc, thetaAt(t1));
      const largeArc = Math.abs(arc.delta * (t1 - t0)) > Math.PI ? 1 : 0;
      return [
        `A${fmt(arc.rx)} ${fmt(arc.ry)} ${fmt(arc.angle)} ${largeArc} ${arc.sweep ? 1 : 0} ${fmt(end[0])} ${fmt(end[1])}`,
      ];
    },
  };

  // circular arcs have an exact length, elliptical ones are measured
  if (Math.abs(arc.rx - arc.ry) < EPSILON) {
    segment.length = Math.abs(arc.delta) * arc.rx;
    segment.tAt = (distance) =>
      segment.length ? Math.min(1, Math.max(0, distance / segment.length)) : 0;
    return segment;
  }
  return withLengthTable(segment);
};

// splits path data into subpaths made of measurable segments
const toSubpaths = (d) => {
  const subpaths = [];
  let current = null,
    point = [0, 0],
    start = [0, 0];

  svgpath(d)
    .abs()
    .unshort()
    .iterate((segment) => {
      const [command, ...args] = segment;

      if (command === 'M') {
        point = start = [args[0], args[1]];
        current = { start, segments: [], closed: false };
        subpaths.push(current);
        return;
      }

      if (!current) {
        current = { start: point, segments: [], closed: false };
        subpaths.push(current);
      }

      let next;
      switch (command) {
        case 'L':
          next = [args[0], args[1]];
          current.segments.push(lineSegment(point, next));
          break;
        case 'H':
          next = [args[0], point[1]];
          current.segments.push(lineSegment(point, next));
          break;
        case 'V':
          next = [point[0], args[0]];
          current.segments.push(lineSegment(point, next));
          break;
        case 'C':
          next = [args[4], args[5]];
          current.segments.push(
            bezierSegment([point, [args[0], args[1]], [args[2], args[3]], next]),
          );
          break;
        case 'Q':
          next = [args[2], args[3]];
          current.segments.push(bezierSegment([point, [args[0], args[1]], next]));
          break;
        case 'A':
          next = [args[5], args[6]];
          if (!args[0] || !args[1]) current.segments.push(lineSegment(point, next));
          else
            current.segments.push(
              arcSegment(point, args[0], args[1], args[2], args[3], args[4], next),
            );
          break;
        case 'Z':
          next = start;
          if (!samePoint(point, start)) current.segments.push(lineSegment(point, start));
          current.closed = true;
          break;
        default:
          throw new Error(`Unsupported path command \`${command}\` in dashed path`);
      }
      point = next;
    });

  return subpaths
    .map((subpath) => ({
      ...subpath,
      segments: subpath.segments.filter((segment) => segment.length > EPSILON),
    }))
    .filter((subpath) => subpath.segments.length);
};

// --- dashing ---

const parseDashArray = (value) => {
  if (!value || value === 'none') return null;
  let dashes = value
    .trim()
    .split(/[\s,]+/)
    .map(Number);
  if (dashes.some((dash) => !Number.isFinite(dash) || dash < 0)) return null;
  if (dashes.length % 2) dashes = [...dashes, ...dashes];
  if (dashes.reduce((sum, dash) => sum + dash, 0) <= 0) return null;
  return dashes;
};

// [from, to] distances of every dash along a subpath of the given length
const dashIntervals = (total, dashes, offset) => {
  const pattern = dashes.reduce((sum, dash) => sum + dash, 0);
  let position = -(((offset % pattern) + pattern) % pattern),
    index = 0;
  const intervals = [];

  while (position < total - EPSILON) {
    const length = dashes[index];
    if (index % 2 === 0) {
      const from = Math.max(0, position),
        to = Math.min(total, position + length);
      if (to > from - EPSILON && position + length >= 0) intervals.push([from, to]);
    }
    position += length;
    index = (index + 1) % dashes.length;
  }
  return intervals;
};

// path commands (without the initial move) for a distance range of a subpath
const sliceSubpath = (subpath, from, to) => {
  const commands = [];
  let offset = 0,
    startPoint = null;

  for (const segment of subpath.segments) {
    const segmentStart = offset,
      segmentEnd = offset + segment.length;
    offset = segmentEnd;

    if (segmentEnd < from - EPSILON || segmentStart > to + EPSILON) continue;
    if (segmentEnd - from < EPSILON && to - from > EPSILON) continue;

    const t0 = segment.tAt(from - segmentStart),
      t1 = segment.tAt(to - segmentStart);
    if (!startPoint) startPoint = segment.point(t0);
    if (t1 - t0 > EPSILON / LENGTH_SAMPLES) commands.push(...segment.slice(t0, t1));
    if (segmentEnd >= to - EPSILON) break;
  }

  return { startPoint, commands };
};

const pointAt = (subpath, distance) => {
  let offset = 0;
  for (const segment of subpath.segments) {
    if (distance <= offset + segment.length || segment === subpath.segments.at(-1)) {
      return segment.point(segment.tAt(distance - offset));
    }
    offset += segment.length;
  }
};

// a zero length dash is drawn as a dot (a tiny step along the path)
const dotCommands = (subpath, at, total) => {
  const startPoint = pointAt(subpath, at);
  const step = at + 0.01 <= total ? 0.01 : -0.01;
  const target = pointAt(subpath, at + step);
  const dx = target[0] - startPoint[0],
    dy = target[1] - startPoint[1];
  const length = Math.hypot(dx, dy) || 1;
  const sign = step > 0 ? 1 : -1;
  return {
    startPoint,
    commands: [
      `L${fmt(startPoint[0] + (sign * dx * 0.01) / length)} ${fmt(startPoint[1] + (sign * dy * 0.01) / length)}`,
    ],
  };
};

export const dashPathData = (d, dashArray, dashOffset = 0) => {
  const dashes = parseDashArray(dashArray);
  if (!dashes) return [d];

  const paths = [];
  toSubpaths(d).forEach((subpath) => {
    const total = subpath.segments.reduce((sum, segment) => sum + segment.length, 0);
    const end = subpath.segments.at(-1).end;
    const isLoop = subpath.closed || samePoint(subpath.start, end);

    const intervals = dashIntervals(total, dashes, dashOffset);
    const pieces = intervals.map(([from, to]) =>
      to - from < EPSILON ? dotCommands(subpath, from, total) : sliceSubpath(subpath, from, to),
    );

    // a dash running through the start of a closed shape is one dash
    if (
      isLoop &&
      pieces.length > 1 &&
      intervals[0][0] < EPSILON &&
      intervals.at(-1)[1] > total - EPSILON
    ) {
      const first = pieces.shift();
      pieces.at(-1).commands.push(...first.commands);
    }

    pieces.forEach(({ startPoint, commands }) => {
      if (!startPoint || !commands.length) return;
      paths.push(`M${fmt(startPoint[0])} ${fmt(startPoint[1])}${commands.join('')}`);
    });
  });

  return paths;
};

// --- svg tree ---

const convertNode = (node, inherited) => {
  const own = {};
  DASH_ATTRS.forEach((attr) => {
    if (node.attributes[attr] !== undefined) {
      own[attr] = node.attributes[attr];
      delete node.attributes[attr];
    }
  });
  const dash = { ...inherited, ...own };

  if (SHAPE_ATTRS[node.name] && dash['stroke-dasharray']) {
    const d = shapeToPathData(node.name, node.attributes);
    const attributes = { ...node.attributes };
    SHAPE_ATTRS[node.name].forEach((attr) => delete attributes[attr]);

    return dashPathData(d, dash['stroke-dasharray'], num(dash['stroke-dashoffset'])).map(
      (pathData) => ({
        name: 'path',
        type: 'element',
        value: '',
        attributes: { ...attributes, d: pathData },
        children: [],
      }),
    );
  }

  node.children = node.children.flatMap((child) =>
    child.type === 'element' ? convertNode(child, dash) : [child],
  );
  return [node];
};

export const convertDashesToPaths = (svg) => {
  if (!/stroke-dash(array|offset)/.test(svg)) return svg;

  const tree = parseSync(svg);
  return stringify(convertNode(tree, {})[0]);
};

import * as React from "react";

function IconBadge4k({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-4k" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M7 9v2a1 1 0 0 0 1 1h1" /><path d="M10 9v6" /><path d="M14 9v6" /><path d="M17 9l-2 3l2 3" /><path d="M15 12h-1" /></svg>;
}

export default IconBadge4k;
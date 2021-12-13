import * as React from "react";

function IconAB({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-a-b" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" /><line x1={12} y1={6} x2={12} y2={18} /><path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" /></svg>;
}

export default IconAB;
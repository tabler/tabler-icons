import * as React from "react";

function IconRuler({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ruler" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" /><line x1={4} y1={8} x2={6} y2={8} /><line x1={4} y1={12} x2={7} y2={12} /><line x1={4} y1={16} x2={6} y2={16} /><line x1={8} y1={4} x2={8} y2={6} /><polyline points="12 4 12 7 " /><polyline points="16 4 16 6 " /></svg>;
}

export default IconRuler;
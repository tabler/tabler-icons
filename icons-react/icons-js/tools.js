import * as React from "react";

function IconTools({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><line x1={14.5} y1={5.5} x2={18.5} y2={9.5} /><polyline points="12 8 7 3 3 7 8 12" /><line x1={7} y1={8} x2={5.5} y2={9.5} /><polyline points="16 12 21 17 17 21 12 16" /><line x1={16} y1={17} x2={14.5} y2={18.5} /></svg>;
}

export default IconTools;
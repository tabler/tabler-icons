import * as React from "react";

function IconWallOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wall-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409" /><path d="M4 8h4m4 0h8" /><path d="M20 12h-4m-4 0h-8" /><path d="M4 16h12" /><path d="M9 4v1" /><path d="M14 8v2" /><path d="M8 12v4" /><path d="M11 16v4" /><path d="M3 3l18 18" /></svg>;
}

export default IconWallOff;
import * as React from "react";

function IconBuildingPavilon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-pavilon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" /><line x1={6} y1={21} x2={6} y2={12} /><line x1={18} y1={21} x2={18} y2={12} /><path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" /></svg>;
}

export default IconBuildingPavilon;
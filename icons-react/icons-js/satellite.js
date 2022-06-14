import * as React from "react";

function IconSatellite({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-satellite" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" /><path d="M6 10l-3 3l3 3l3 -3" /><path d="M10 6l3 -3l3 3l-3 3" /><line x1={12} y1={12} x2={13.5} y2={13.5} /><path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" /><path d="M15 21a6 6 0 0 0 6 -6" /></svg>;
}

export default IconSatellite;
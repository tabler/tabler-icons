import * as React from "react";

function IconCricket({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cricket" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cricket"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.105 18.79l-1.006 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617" /><path d="M10.5 7.5l6 6" /><circle cx={14} cy={18} r={3} /></svg>;
}

export default IconCricket;
import * as React from "react";

function IconCe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ce" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ce"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4a8 8 0 1 0 0 16" /><path d="M20 4a8 8 0 1 0 0 16" /><line x1={12} y1={12} x2={20} y2={12} /></svg>;
}

export default IconCe;
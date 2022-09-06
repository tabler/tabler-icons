import * as React from "react";

function IconJpg({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-jpg" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /><path d="M10 16v-8h2a2 2 0 1 1 0 4h-2" /><path d="M3 8h4v6a2 2 0 0 1 -2 2h-1.5a0.5 .5 0 0 1 -.5 -.5v-.5" /></svg>;
}

export default IconJpg;
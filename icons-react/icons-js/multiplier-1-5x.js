import * as React from "react";

function IconMultiplier15x({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-multiplier-1-5x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/multiplier-1-5x"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 16v-8l-2 2" /><path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M7 16v.01" /><path d="M17 16l4 -4" /><path d="M21 16l-4 -4" /></svg>;
}

export default IconMultiplier15x;
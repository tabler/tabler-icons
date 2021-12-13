import * as React from "react";

function IconMultiplier05x({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-multiplier-0-5x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M5 16v.01" /><path d="M15 16l4 -4" /><path d="M19 16l-4 -4" /></svg>;
}

export default IconMultiplier05x;
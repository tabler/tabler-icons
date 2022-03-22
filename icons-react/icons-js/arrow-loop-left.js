import * as React from "react";

function IconArrowLoopLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-loop-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 21v-13a4 4 0 1 1 4 4h-13" /><path d="M8 16l-4 -4l4 -4" /></svg>;
}

export default IconArrowLoopLeft;
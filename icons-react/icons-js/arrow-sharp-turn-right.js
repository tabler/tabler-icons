import * as React from "react";

function IconArrowSharpTurnRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-sharp-turn-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 18v-11.31a0.7 .7 0 0 1 1.195 -.495l9.805 9.805" /><path d="M13 16h5v-5" /></svg>;
}

export default IconArrowSharpTurnRight;
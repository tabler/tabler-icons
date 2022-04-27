import * as React from "react";

function IconMathMin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-min" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/math-min"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle transform="matrix(1 0 0 -1 0 38)" cx={12} cy={19} r={2} /><path d="M3 4c0 8.75 4 14 7 14.5m4 0c3 -.5 7 -5.75 7 -14.5" /></svg>;
}

export default IconMathMin;
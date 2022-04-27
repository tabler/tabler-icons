import * as React from "react";

function IconMathMax({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-max" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/math-max"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={2} /><path d="M3 20c0 -8.75 4 -14 7 -14.5m4 0c3 .5 7 5.75 7 14.5" /></svg>;
}

export default IconMathMax;
import * as React from "react";

function IconMathOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 19l2.5 -2.5" /><path d="M18.5 14.5l1.5 -1.5" /><path d="M3 3l18 18" /><path d="M19 5h-7l-.646 2.262" /><path d="M10.448 10.431l-2.448 8.569l-3 -6h-2" /></svg>;
}

export default IconMathOff;
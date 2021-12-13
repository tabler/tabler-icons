import * as React from "react";

function IconMathFunction({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-function" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 10h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" /><path d="M13 17c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" /><path d="M3 19c0 1.5 .5 2 2 2s2 -4 3 -9s1.5 -9 3 -9s2 .5 2 2" /><line x1={5} y1={12} x2={11} y2={12} /></svg>;
}

export default IconMathFunction;
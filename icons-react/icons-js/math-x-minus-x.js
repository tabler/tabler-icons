import * as React from "react";

function IconMathXMinusX({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-x-minus-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 9l6 6" /><path d="M2 15l6 -6" /><path d="M16 9l6 6" /><path d="M16 15l6 -6" /><path d="M10 12h4" /></svg>;
}

export default IconMathXMinusX;
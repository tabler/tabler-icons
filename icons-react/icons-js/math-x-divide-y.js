import * as React from "react";

function IconMathXDivideY({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-x-divide-y" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3l6 6" /><path d="M9 9l6 -6" /><path d="M9 15l3 4.5" /><path d="M15 15l-4.5 7" /><path d="M5 12h14" /></svg>;
}

export default IconMathXDivideY;
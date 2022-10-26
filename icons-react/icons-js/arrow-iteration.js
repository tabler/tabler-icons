import * as React from "react";

function IconArrowIteration({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-iteration" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" /><path d="M3 16h18" /><path d="M18 13l3 3l-3 3" /></svg>;
}

export default IconArrowIteration;
import * as React from "react";

function IconTransitionRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transition-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><path d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" /><path d="M9 12h8" /><path d="M14 15l3 -3l-3 -3" /></svg>;
}

export default IconTransitionRight;
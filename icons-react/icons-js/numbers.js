import * as React from "react";

function IconNumbers({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-numbers" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 10v-7l-2 2" /><path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3.001h4" /><path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" /><path d="M6.5 10h3" /></svg>;
}

export default IconNumbers;
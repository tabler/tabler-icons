import * as React from "react";

function IconWoman({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-woman" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 16v5" /><path d="M14 16v5" /><path d="M8 16h8l-2 -7h-4z" /><path d="M5 11c1.667 -1.333 3.333 -2 5 -2" /><path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" /><circle cx={12} cy={4} r={2} /></svg>;
}

export default IconWoman;
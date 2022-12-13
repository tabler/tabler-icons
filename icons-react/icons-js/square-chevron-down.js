import * as React from "react";

function IconSquareChevronDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-chevron-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 11l-3 3l-3 -3" /><path d="M20 6.667v10.666a2.667 2.667 0 0 1 -2.667 2.667h-10.666a2.667 2.667 0 0 1 -2.667 -2.667v-10.666a2.667 2.667 0 0 1 2.667 -2.667h10.666a2.667 2.667 0 0 1 2.667 2.667z" /></svg>;
}

export default IconSquareChevronDown;
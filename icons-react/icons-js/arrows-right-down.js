import * as React from "react";

function IconArrowsRightDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-right-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l4 4l4 -4" /><path d="M7 21v-11a3 3 0 0 1 3 -3h11" /><path d="M17 11l4 -4l-4 -4" /></svg>;
}

export default IconArrowsRightDown;
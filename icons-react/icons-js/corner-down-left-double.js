import * as React from "react";

function IconCornerDownLeftDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-left-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 5v6a3 3 0 0 1 -3 3h-7" /><path d="M13 10l-4 4l4 4m-5 -8l-4 4l4 4" /></svg>;
}

export default IconCornerDownLeftDouble;
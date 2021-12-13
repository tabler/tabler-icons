import * as React from "react";

function IconRotateClockwise({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" /></svg>;
}

export default IconRotateClockwise;
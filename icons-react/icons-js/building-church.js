import * as React from "react";

function IconBuildingChurch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-church" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={21} x2={21} y2={21} /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><line x1={10} y1={5} x2={14} y2={5} /><line x1={12} y1={3} x2={12} y2={8} /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>;
}

export default IconBuildingChurch;
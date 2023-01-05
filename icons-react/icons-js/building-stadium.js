import * as React from "react";

function IconBuildingStadium({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-stadium" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><ellipse cx={12} cy={12} rx={8} ry={2} /><path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" /><path d="M15 6h4v-3h-4v7" /><path d="M7 6h4v-3h-4v7" /></svg>;
}

export default IconBuildingStadium;
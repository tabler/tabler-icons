import * as React from "react";

function IconBuildingMonument({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-monument" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 18l2 -13l2 -2l2 2l2 13" /><path d="M5 21v-3h14v3" /><line x1={3} y1={21} x2={21} y2={21} /></svg>;
}

export default IconBuildingMonument;
import * as React from "react";

function IconDotsCircleHorizontal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-circle-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={8} y1={12} x2={8} y2={12.01} /><line x1={12} y1={12} x2={12} y2={12.01} /><line x1={16} y1={12} x2={16} y2={12.01} /></svg>;
}

export default IconDotsCircleHorizontal;
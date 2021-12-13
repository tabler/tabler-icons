import * as React from "react";

function IconLayoutAlignMiddle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-align-middle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={12} x2={9} y2={12} /><line x1={15} y1={12} x2={20} y2={12} /><rect x={9} y={6} width={6} height={12} rx={2} /></svg>;
}

export default IconLayoutAlignMiddle;
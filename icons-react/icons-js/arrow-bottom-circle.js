import * as React from "react";

function IconArrowBottomCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrow-bottom-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={7} x2={12} y2={21} /><path d="M9 18l3 3l3 -3" /><circle cx={12} cy={5} r={2} /></svg>;
}

export default IconArrowBottomCircle;
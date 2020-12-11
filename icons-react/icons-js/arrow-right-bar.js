import * as React from "react";

function IconArrowRightBar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrow-right-bar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 15l3 -3l-3 -3" /><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={9} x2={3} y2={15} /></svg>;
}

export default IconArrowRightBar;
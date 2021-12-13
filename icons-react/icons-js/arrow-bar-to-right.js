import * as React from "react";

function IconArrowBarToRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={14} y1={12} x2={4} y2={12} /><line x1={14} y1={12} x2={10} y2={16} /><line x1={14} y1={12} x2={10} y2={8} /><line x1={20} y1={4} x2={20} y2={20} /></svg>;
}

export default IconArrowBarToRight;
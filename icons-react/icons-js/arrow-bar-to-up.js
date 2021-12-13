import * as React from "react";

function IconArrowBarToUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={10} x2={12} y2={20} /><line x1={12} y1={10} x2={16} y2={14} /><line x1={12} y1={10} x2={8} y2={14} /><line x1={4} y1={4} x2={20} y2={4} /></svg>;
}

export default IconArrowBarToUp;
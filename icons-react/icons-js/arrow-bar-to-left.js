import * as React from "react";

function IconArrowBarToLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-bar-to-left"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={10} y1={12} x2={20} y2={12} /><line x1={10} y1={12} x2={14} y2={16} /><line x1={10} y1={12} x2={14} y2={8} /><line x1={4} y1={4} x2={4} y2={20} /></svg>;
}

export default IconArrowBarToLeft;
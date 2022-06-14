import * as React from "react";

function IconArrowLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={5} y1={12} x2={19} y2={12} /><line x1={5} y1={12} x2={11} y2={18} /><line x1={5} y1={12} x2={11} y2={6} /></svg>;
}

export default IconArrowLeft;
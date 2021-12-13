import * as React from "react";

function IconArrowUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={18} y1={11} x2={12} y2={5} /><line x1={6} y1={11} x2={12} y2={5} /></svg>;
}

export default IconArrowUp;
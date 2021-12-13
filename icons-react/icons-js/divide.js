import * as React from "react";

function IconDivide({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-divide" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle fill="currentColor" cx={12} cy={6} r={1} /><circle fill="currentColor" cx={12} cy={18} r={1} /><line x1={5} y1={12} x2={19} y2={12} /></svg>;
}

export default IconDivide;
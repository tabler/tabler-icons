import * as React from "react";

function IconVenus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-venus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={9} r={5} /><line x1={12} y1={14} x2={12} y2={21} /><line x1={9} y1={18} x2={15} y2={18} /></svg>;
}

export default IconVenus;
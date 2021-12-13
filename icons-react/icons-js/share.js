import * as React from "react";

function IconShare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={6} r={3} /><circle cx={18} cy={18} r={3} /><line x1={8.7} y1={10.7} x2={15.3} y2={7.3} /><line x1={8.7} y1={13.3} x2={15.3} y2={16.7} /></svg>;
}

export default IconShare;
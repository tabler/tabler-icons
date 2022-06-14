import * as React from "react";

function IconCompass({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="8 16 10 10 16 8 14 14 8 16" /><circle cx={12} cy={12} r={9} /><line x1={12} y1={3} x2={12} y2={5} /><line x1={12} y1={19} x2={12} y2={21} /><line x1={3} y1={12} x2={5} y2={12} /><line x1={19} y1={12} x2={21} y2={12} /></svg>;
}

export default IconCompass;
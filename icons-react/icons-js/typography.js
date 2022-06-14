import * as React from "react";

function IconTypography({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-typography" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={20} x2={7} y2={20} /><line x1={14} y1={20} x2={21} y2={20} /><line x1={6.9} y1={15} x2={13.8} y2={15} /><line x1={10.2} y1={6.3} x2={16} y2={20} /><polyline points="5 20 11 4 13 4 20 20" /></svg>;
}

export default IconTypography;
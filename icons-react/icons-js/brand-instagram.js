import * as React from "react";

function IconBrandInstagram({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={4} /><circle cx={12} cy={12} r={3} /><line x1={16.5} y1={7.5} x2={16.5} y2={7.501} /></svg>;
}

export default IconBrandInstagram;
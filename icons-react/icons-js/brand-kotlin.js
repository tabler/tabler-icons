import * as React from "react";

function IconBrandKotlin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-kotlin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 20h-16v-16h16" /><line x1={4} y1={20} x2={20} y2={4} /><path d="M4 12l8 -8" /><line x1={12} y1={12} x2={20} y2={20} /></svg>;
}

export default IconBrandKotlin;
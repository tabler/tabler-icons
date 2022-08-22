import * as React from "react";

function IconBrandGrammarly({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-grammarly" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M15.697 9.434a4.5 4.5 0 1 0 .217 4.788" /><path d="M13.5 14h2.5v2.5" /></svg>;
}

export default IconBrandGrammarly;
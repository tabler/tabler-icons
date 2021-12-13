import * as React from "react";

function IconBrandSafari({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-safari" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="8 16 10 10 16 8 14 14 8 16" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconBrandSafari;
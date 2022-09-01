import * as React from "react";

function IconBrandWix({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-wix" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 9l1.5 6l1.379 -5.515a0.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" /><path d="M13 11.5v3.5" /><path d="M16 9l5 6" /><path d="M21 9l-5 6" /><path d="M13 9h.01" /></svg>;
}

export default IconBrandWix;
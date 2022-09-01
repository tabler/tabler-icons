import * as React from "react";

function IconBrandWordpress({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-wordpress" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.5 9h3" /><path d="M4 9h2.5" /><path d="M11 9l3 11l4 -9" /><path d="M5.5 9l3.5 11l3 -7" /><path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconBrandWordpress;
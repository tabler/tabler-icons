import * as React from "react";

function IconBrandZwift({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-zwift" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.5 4c-1.465 0 -2.5 1.101 -2.5 2.5s1.035 2.5 2.5 2.5h2.5l-4.637 7.19a2.434 2.434 0 0 0 -.011 2.538c.473 .787 1.35 1.272 2.3 1.272h10.848c1.465 0 2.5 -1.101 2.5 -2.5s-1.035 -2.5 -2.5 -2.5h-2.5l7 -11h-15.5z" /></svg>;
}

export default IconBrandZwift;
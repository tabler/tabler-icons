import * as React from "react";

function IconGardenCartOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-garden-cart-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" /><path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" /><path d="M6 8h2m4 0h9l-3.005 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" /><path d="M3 3l18 18" /></svg>;
}

export default IconGardenCartOff;
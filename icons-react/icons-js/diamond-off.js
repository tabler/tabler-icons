import * as React from "react";

function IconDiamondOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-diamond-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/diamond-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h9l3 5l-3.308 3.697m-1.883 2.104l-3.309 3.699a0.7 .7 0 0 1 -1 0l-8.5 -9.5l2.62 -4.368" /><path d="M10 12l-2 -2.2l.6 -1" /><path d="M3 3l18 18" /></svg>;
}

export default IconDiamondOff;
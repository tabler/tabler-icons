import * as React from "react";

function IconBathOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bath-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/bath-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12h4a1 1 0 0 1 1 1v3c0 .311 -.036 .614 -.103 .904m-1.61 2.378a3.982 3.982 0 0 1 -2.287 .718h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1h8" /><path d="M6 12v-6m1.178 -2.824c.252 -.113 .53 -.176 .822 -.176h3v2.25" /><path d="M4 21l1 -1.5" /><path d="M20 21l-1 -1.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconBathOff;
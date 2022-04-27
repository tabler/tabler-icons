import * as React from "react";

function IconBadgeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/badge-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" /><path d="M3 3l18 18" /></svg>;
}

export default IconBadgeOff;
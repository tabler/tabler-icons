import * as React from "react";

function IconExternalLinkOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/external-link-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M10 14l1.996 -1.996m2.007 -2.007l5.997 -5.997" /><path d="M15 4h5v5" /><path d="M3 3l18 18" /></svg>;
}

export default IconExternalLinkOff;
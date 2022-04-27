import * as React from "react";

function IconWritingOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-writing-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/writing-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 7h4" /><path d="M16 16v1l2 2l.5 -.5m1.5 -2.5v-11c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v7" /><path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" /><path d="M3 3l18 18" /></svg>;
}

export default IconWritingOff;
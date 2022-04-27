import * as React from "react";

function IconEyeglassOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eyeglass-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/eyeglass-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.536 5.546l-2.536 8.454" /><path d="M16 4h2l3 10" /><path d="M10 16h4" /><path d="M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" /><path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconEyeglassOff;
import * as React from "react";

function IconAlignBoxTopLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-box-top-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.778 20h12.444c.982 0 1.778 -.796 1.778 -1.778v-12.444c0 -.982 -.796 -1.778 -1.778 -1.778h-12.444c-.982 0 -1.778 .796 -1.778 1.778v12.444c0 .982 .796 1.778 1.778 1.778z" /><path d="M7 9v-2" /><path d="M10 13v-6" /><path d="M13 11v-4" /></svg>;
}

export default IconAlignBoxTopLeft;
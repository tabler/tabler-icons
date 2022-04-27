import * as React from "react";

function IconCodeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/code-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-2.5 2.5" /><path d="M14 4l-1.201 4.805m-.802 3.207l-1.997 7.988" /><path d="M3 3l18 18" /></svg>;
}

export default IconCodeOff;
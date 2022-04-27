import * as React from "react";

function IconDisabledOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disabled-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/disabled-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 7a2 2 0 1 0 -2 -2" /><path d="M11 11v4h4l4 5" /><path d="M15 11h1" /><path d="M7 11.5a5 5 0 1 0 6 7.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconDisabledOff;
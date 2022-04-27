import * as React from "react";

function IconBrowserOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/browser-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702a0.997 .997 0 0 1 -.712 .298h-14a1 1 0 0 1 -1 -1v-14c0 -.276 .112 -.526 .293 -.707" /><path d="M4 8h4m4 0h8" /><path d="M3 3l18 18" /></svg>;
}

export default IconBrowserOff;
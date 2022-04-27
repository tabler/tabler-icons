import * as React from "react";

function IconMessageOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/message-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={3} x2={21} y2={21} /><path d="M17 17h-9l-4 4v-13c0 -1.086 .577 -2.036 1.44 -2.563m3.561 -.437h8a3 3 0 0 1 3 3v6c0 .575 -.162 1.112 -.442 1.568" /></svg>;
}

export default IconMessageOff;
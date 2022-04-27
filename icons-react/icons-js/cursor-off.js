import * as React from "react";

function IconCursorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cursor-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cursor-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" /><path d="M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" /><path d="M3 3l18 18" /></svg>;
}

export default IconCursorOff;
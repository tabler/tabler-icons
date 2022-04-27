import * as React from "react";

function IconBallonOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ballon-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ballon-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8a2 2 0 0 0 -2 -2" /><path d="M7.762 3.753a6 6 0 0 1 10.238 4.247c0 1.847 -.37 3.564 -1.007 4.993m-1.59 2.42c-.967 1.001 -2.14 1.587 -3.403 1.587c-3.314 0 -6 -4.03 -6 -9c0 -.593 .086 -1.166 .246 -1.707" /><path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" /><path d="M3 3l18 18" /></svg>;
}

export default IconBallonOff;
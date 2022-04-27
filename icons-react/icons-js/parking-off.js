import * as React from "react";

function IconParkingOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-parking-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/parking-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h10a2 2 0 0 1 2 2v10m-.582 3.41c-.362 .365 -.864 .59 -1.418 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" /><path d="M9 16v-7m3 -1h1a2 2 0 0 1 1.817 2.836m-2.817 1.164h-3" /><path d="M3 3l18 18" /></svg>;
}

export default IconParkingOff;
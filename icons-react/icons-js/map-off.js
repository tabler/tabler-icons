import * as React from "react";

function IconMapOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/map-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.32 4.34l.68 -.34l6 3l6 -3v13m-2.67 1.335l-3.33 1.665l-6 -3l-6 3v-13l2.665 -1.333" /><path d="M9 4v1m0 4v8" /><path d="M15 7v4m0 4v5" /><path d="M3 3l18 18" /></svg>;
}

export default IconMapOff;
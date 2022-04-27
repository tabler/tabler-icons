import * as React from "react";

function IconDeviceNintendo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-nintendo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/device-nintendo"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" /><path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" /><circle cx={17.5} cy={15.5} r={1} fill="currentColor" /><circle cx={6.5} cy={8.5} r={1} fill="currentColor" /></svg>;
}

export default IconDeviceNintendo;
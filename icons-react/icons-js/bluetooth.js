import * as React from "react";

function IconBluetooth({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bluetooth" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/bluetooth"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="7 8 17 16 12 20 12 4 17 8 7 16" /></svg>;
}

export default IconBluetooth;
import * as React from "react";

function IconDeviceTvOld({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv-old" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/device-tv-old"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={7} width={18} height={13} rx={2} /><path d="M16 3l-4 4l-4 -4" /><path d="M15 7v13" /><path d="M18 15v.01" /><path d="M18 12v.01" /></svg>;
}

export default IconDeviceTvOld;
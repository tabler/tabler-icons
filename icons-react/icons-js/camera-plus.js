import * as React from "react";

function IconCameraPlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/camera-plus"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={13} r={3} /><path d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><line x1={15} y1={6} x2={21} y2={6} /><line x1={18} y1={3} x2={18} y2={9} /></svg>;
}

export default IconCameraPlus;
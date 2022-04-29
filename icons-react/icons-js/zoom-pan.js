import * as React from "react";

function IconZoomPan({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-pan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/zoom-pan"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={3} /><path d="M17 17l-2.5 -2.5" /><path d="M10 5l2 -2l2 2" /><path d="M19 10l2 2l-2 2" /><path d="M5 10l-2 2l2 2" /><path d="M10 19l2 2l2 -2" /></svg>;
}

export default IconZoomPan;
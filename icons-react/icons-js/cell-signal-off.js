import * as React from "react";

function IconCellSignalOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cell-signal-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cell-signal-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 20h-15.269a0.731 .731 0 0 1 -.517 -1.249l7.265 -7.264m2 -2.001l5.272 -5.272a0.731 .731 0 0 1 1.249 .517v11.269" /><path d="M3 3l18 18" /></svg>;
}

export default IconCellSignalOff;
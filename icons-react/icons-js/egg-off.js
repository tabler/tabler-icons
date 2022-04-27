import * as React from "react";

function IconEggOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-egg-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/egg-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7.41 7.41a12.574 12.574 0 0 0 -1.896 7.229c0 3.513 2.904 6.361 6.486 6.361a6.504 6.504 0 0 0 5.692 -3.31m.8 -3.192a12.574 12.574 0 0 0 -3.249 -8.871a4.025 4.025 0 0 0 -3.243 -1.627a4.026 4.026 0 0 0 -2.832 1.155" /><path d="M3 3l18 18" /></svg>;
}

export default IconEggOff;
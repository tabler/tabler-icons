import * as React from "react";

function IconScissorsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scissors-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/scissors-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" /><circle cx={6} cy={17} r={3} /><path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" /><path d="M3 3l18 18" /></svg>;
}

export default IconScissorsOff;
import * as React from "react";

function IconHangerOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hanger-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/hanger-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.004 6a2 2 0 1 0 -4 0m6.506 6.506l3.461 1.922a2 2 0 0 1 1.029 1.749v.823m-2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l6.673 -3.707" /><path d="M3 3l18 18" /></svg>;
}

export default IconHangerOff;
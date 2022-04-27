import * as React from "react";

function IconHammerOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hammer-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/hammer-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.698 10.72l-6.668 6.698a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l6.696 -6.676" /><path d="M18.713 14.702l1.994 -1.995a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-1.999 1.999" /><path d="M3 3l18 18" /></svg>;
}

export default IconHammerOff;
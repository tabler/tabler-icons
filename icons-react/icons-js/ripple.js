import * as React from "react";

function IconRipple({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ripple" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ripple"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" /><path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" /><path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" /></svg>;
}

export default IconRipple;
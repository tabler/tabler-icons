import * as React from "react";

function IconColumnsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-columns-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/columns-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h2" /><path d="M4 10h5.5" /><path d="M4 14h5.5" /><path d="M4 18h5.5" /><path d="M14.5 6h5.5" /><path d="M14.5 10h5.5" /><path d="M18 14h2" /><path d="M14.5 18h3.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconColumnsOff;
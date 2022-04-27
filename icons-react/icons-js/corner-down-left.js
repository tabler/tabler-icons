import * as React from "react";

function IconCornerDownLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/corner-down-left"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4" /></svg>;
}

export default IconCornerDownLeft;
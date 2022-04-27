import * as React from "react";

function IconArrowsUpRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-up-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrows-up-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 21l4 -4l-4 -4" /><path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" /><path d="M11 7l-4 -4l-4 4" /></svg>;
}

export default IconArrowsUpRight;
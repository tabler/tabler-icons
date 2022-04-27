import * as React from "react";

function IconArrowsRandom({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-random" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrows-random"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 21.004h-4v-4" /><path d="M16 21.004l5 -5" /><path d="M6.5 9.504l-3.5 -2l2 -3.504" /><path d="M3 7.504l6.83 -1.87" /><path d="M4 16.004l4 -1l1 4" /><path d="M8 15.004l-3.5 6" /><path d="M21 5.004l-.5 4l-4 -.5" /><path d="M20.5 9.004l-4.5 -5.5" /></svg>;
}

export default IconArrowsRandom;
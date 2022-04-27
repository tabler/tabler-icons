import * as React from "react";

function IconLetterSpacing({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-spacing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/letter-spacing"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" /><path d="M13 4l3 8l3 -8" /><path d="M5 18h14" /><path d="M17 20l2 -2l-2 -2" /><path d="M7 16l-2 2l2 2" /></svg>;
}

export default IconLetterSpacing;
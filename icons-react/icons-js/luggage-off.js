import * as React from "react";

function IconLuggageOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-luggage-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/luggage-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" /><path d="M6 10h4m4 0h4" /><path d="M6 16h10" /><path d="M9 20v1" /><path d="M15 20v1" /><path d="M3 3l18 18" /></svg>;
}

export default IconLuggageOff;
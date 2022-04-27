import * as React from "react";

function IconZodiacCancer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-cancer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/zodiac-cancer"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={12} r={3} /><path d="M3 12a10 6.5 0 0 1 14 -6.5" /><path d="M21 12a10 6.5 0 0 1 -14 6.5" /></svg>;
}

export default IconZodiacCancer;
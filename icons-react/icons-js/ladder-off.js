import * as React from "react";

function IconLadderOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ladder-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ladder-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 3v1m0 4v13" /><path d="M16 3v9m0 4v5" /><path d="M8 14h6" /><path d="M8 10h2m4 0h2" /><path d="M10 6h6" /><path d="M8 18h8" /><path d="M3 3l18 18" /></svg>;
}

export default IconLadderOff;
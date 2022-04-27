import * as React from "react";

function IconPlayerPlay({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/player-play"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>;
}

export default IconPlayerPlay;
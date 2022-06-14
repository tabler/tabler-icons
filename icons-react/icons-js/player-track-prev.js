import * as React from "react";

function IconPlayerTrackPrev({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-track-prev" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 5v14l-8 -7z" /><path d="M10 5v14l-8 -7z" /></svg>;
}

export default IconPlayerTrackPrev;
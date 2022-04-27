import * as React from "react";

function IconPlayerSkipBack({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-skip-back" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/player-skip-back"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 5v14l-12 -7z" /><line x1={4} y1={5} x2={4} y2={19} /></svg>;
}

export default IconPlayerSkipBack;
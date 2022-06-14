import * as React from "react";

function IconPlayerEject({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-eject" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h14l-7 -8z" /><rect x={5} y={16} width={14} height={4} rx={1} /></svg>;
}

export default IconPlayerEject;
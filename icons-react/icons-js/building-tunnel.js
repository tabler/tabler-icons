import * as React from "react";

function IconBuildingTunnel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-tunnel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2z" /><path d="M8 21v-9a4 4 0 1 1 8 0v9" /><path d="M3 17h4" /><path d="M17 17h4" /><path d="M21 12h-4" /><path d="M7 12h-4" /><path d="M12 3v5" /><path d="M6 6l3 3" /><path d="M15 9l3 -3l-3 3z" /></svg>;
}

export default IconBuildingTunnel;
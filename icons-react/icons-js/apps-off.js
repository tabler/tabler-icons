import * as React from "react";

function IconAppsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704a0.997 .997 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706" /><path d="M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704a0.997 .997 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706" /><rect x={4} y={14} width={6} height={6} rx={1} /><path d="M14 7h6" /><path d="M17 4v6" /><path d="M3 3l18 18" /></svg>;
}

export default IconAppsOff;
import * as React from "react";

function IconDeviceWatchStats({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-watch-stats" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={6} y={6} width={12} height={12} rx={3} /><path d="M9 18v3h6v-3" /><path d="M9 6v-3h6v3" /><path d="M9 14v-4" /><path d="M12 14v-1" /><path d="M15 14v-3" /></svg>;
}

export default IconDeviceWatchStats;
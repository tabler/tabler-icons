import * as React from "react";

function IconActivityHeartbeat({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity-heartbeat" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/activity-heartbeat"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" /></svg>;
}

export default IconActivityHeartbeat;
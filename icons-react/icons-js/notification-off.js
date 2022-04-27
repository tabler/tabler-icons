import * as React from "react";

function IconNotificationOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notification-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/notification-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.154 6.187a2 2 0 0 0 -1.154 1.813v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811 -1.151" /><circle cx={17} cy={7} r={3} /><path d="M3 3l18 18" /></svg>;
}

export default IconNotificationOff;
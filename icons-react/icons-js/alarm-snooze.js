import * as React from "react";

function IconAlarmSnooze({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm-snooze" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={13} r={7} /><path d="M10 11h4l-4 4h4" /><path d="M7 4l-2.75 2" /><path d="M17 4l2.75 2" /></svg>;
}

export default IconAlarmSnooze;
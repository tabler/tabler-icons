import * as React from "react";

function IconCalendarStats({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-stats" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" /><path d="M18 14v4h4" /><circle cx={18} cy={18} r={4} /><path d="M15 3v4" /><path d="M7 3v4" /><path d="M3 11h16" /></svg>;
}

export default IconCalendarStats;
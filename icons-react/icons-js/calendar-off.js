import * as React from "react";

function IconCalendarOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/calendar-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9" /><line x1={16} y1={3} x2={16} y2={7} /><line x1={8} y1={3} x2={8} y2={4} /><path d="M4 11h7m4 0h5" /><line x1={11} y1={15} x2={12} y2={15} /><line x1={12} y1={15} x2={12} y2={18} /><line x1={3} y1={3} x2={21} y2={21} /></svg>;
}

export default IconCalendarOff;
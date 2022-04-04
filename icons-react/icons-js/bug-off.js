import * as React from "react";

function IconBugOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bug-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" /><path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5.002 5.002 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" /><path d="M3 13h4" /><path d="M17 13h4" /><path d="M12 20v-6" /><path d="M4 19l3.35 -2" /><path d="M4 7l3.75 2.4" /><path d="M20 7l-3.75 2.4" /><path d="M3 3l18 18" /></svg>;
}

export default IconBugOff;
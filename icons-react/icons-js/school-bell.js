import * as React from "react";

function IconSchoolBell({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school-bell" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17a3 3 0 0 0 3 3" /><path d="M14.805 6.37l2.783 -2.784a2 2 0 1 1 2.829 2.828l-2.784 2.786" /><path d="M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176 .184l-1.867 1.867a3.48 3.48 0 0 0 -1.013 2.234l-.008 .23v.934c0 .327 -.13 .64 -.36 .871a0.51 .51 0 0 1 -.652 .06l-.07 -.06l-9.385 -9.384a0.51 .51 0 0 1 0 -.722c.198 -.198 .456 -.322 .732 -.353l.139 -.008h.933c.848 0 1.663 -.309 2.297 -.864l.168 -.157l1.867 -1.867l.16 -.153a5.105 5.105 0 0 1 7.059 .153z" /></svg>;
}

export default IconSchoolBell;
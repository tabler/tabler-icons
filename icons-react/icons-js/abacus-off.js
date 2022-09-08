import * as React from "react";

function IconAbacusOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-abacus-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5v16" /><path d="M19 21v-2m0 -4v-12" /><path d="M5 7h2m4 0h8" /><path d="M5 15h10" /><path d="M8 13v4" /><path d="M11 13v4" /><path d="M16 16v1" /><path d="M14 5v4" /><path d="M11 5v2" /><path d="M8 8v1" /><path d="M3 21h18" /><path d="M3 3l18 18" /></svg>;
}

export default IconAbacusOff;
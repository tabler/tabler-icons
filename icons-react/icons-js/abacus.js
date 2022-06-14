import * as React from "react";

function IconAbacus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-abacus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 3v18" /><path d="M19 21v-18" /><path d="M5 7h14" /><path d="M5 15h14" /><path d="M8 13v4" /><path d="M11 13v4" /><path d="M16 13v4" /><path d="M14 5v4" /><path d="M11 5v4" /><path d="M8 5v4" /><path d="M3 21h18" /></svg>;
}

export default IconAbacus;
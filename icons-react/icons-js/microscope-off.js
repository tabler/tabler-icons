import * as React from "react";

function IconMicroscopeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-microscope-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21h14" /><path d="M6 18h2" /><path d="M7 18v3" /><path d="M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3" /><path d="M10.5 12.5l-1.5 1.5" /><path d="M17 3l3 3" /><path d="M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a5.996 5.996 0 0 0 -2.183 -3.608" /><path d="M3 3l18 18" /></svg>;
}

export default IconMicroscopeOff;
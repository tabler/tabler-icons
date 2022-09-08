import * as React from "react";

function IconAntennaOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4v8" /><path d="M16 4.5v7" /><path d="M12 5v3m0 4v9" /><path d="M8 8v2.5" /><path d="M4 6v4" /><path d="M20 8h-8m-4 0h-4" /><path d="M3 3l18 18" /></svg>;
}

export default IconAntennaOff;
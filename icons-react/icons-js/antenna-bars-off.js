import * as React from "react";

function IconAntennaBarsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna-bars-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 18v-3" /><path d="M10 18v-6" /><path d="M14 18v-4" /><path d="M18 14v-8" /><path d="M3 3l18 18" /></svg>;
}

export default IconAntennaBarsOff;
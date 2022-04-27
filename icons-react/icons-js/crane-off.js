import * as React from "react";

function IconCraneOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crane-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/crane-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21h6" /><path d="M9 21v-12" /><path d="M9 5v-2l-1.001 1.001" /><path d="M6.005 5.995l-3.005 3.005h6" /><path d="M13 9h8" /><path d="M9 3l10 6" /><path d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" /><path d="M3 3l18 18" /></svg>;
}

export default IconCraneOff;
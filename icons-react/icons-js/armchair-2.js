import * as React from "react";

function IconArmchair2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-armchair-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /><path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" /><path d="M8 12h8" /><path d="M7 19v2" /><path d="M17 19v2" /></svg>;
}

export default IconArmchair2;
import * as React from "react";

function IconRocketOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rocket-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/rocket-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.29 9.275a9.03 9.03 0 0 0 -.29 .725a6 6 0 0 0 -5 3a8 8 0 0 1 7 7a6 6 0 0 0 3 -5c.241 -.085 .478 -.18 .708 -.283m2.428 -1.61a8.998 8.998 0 0 0 2.864 -6.107a3 3 0 0 0 -3 -3a8.998 8.998 0 0 0 -6.107 2.864" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><circle cx={15} cy={9} r={1} /><path d="M3 3l18 18" /></svg>;
}

export default IconRocketOff;
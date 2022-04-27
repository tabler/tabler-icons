import * as React from "react";

function IconAwardOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/award-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.72 12.704a6 6 0 0 0 -8.433 -8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944" /><path d="M12.002 15.003l3.4 5.89l1.598 -3.233l.707 .046m1.108 -2.902l-1.617 -2.8" /><path d="M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" /><path d="M3 3l18 18" /></svg>;
}

export default IconAwardOff;
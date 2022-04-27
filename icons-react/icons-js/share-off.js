import * as React from "react";

function IconShareOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/share-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={6} r={3} /><path d="M15.861 15.896a3 3 0 0 0 4.265 4.22m.578 -3.417a3.012 3.012 0 0 0 -1.507 -1.45" /><path d="M8.7 10.7l1.336 -.688m2.624 -1.352l2.64 -1.36" /><path d="M8.7 13.3l6.6 3.4" /><path d="M3 3l18 18" /></svg>;
}

export default IconShareOff;
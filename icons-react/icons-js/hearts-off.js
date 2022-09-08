import * as React from "react";

function IconHeartsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hearts-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.017 18.001l-2.017 1.999l-7.5 -7.428a5 5 0 0 1 .49 -7.586m3.01 -.998a5 5 0 0 1 4 2.018a5 5 0 0 1 8.153 5.784" /><path d="M11.814 11.814a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238l2.01 -2.021m1.977 -1.99l.211 -.212a2.81 2.81 0 0 0 .006 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.283 .178" /><path d="M3 3l18 18" /></svg>;
}

export default IconHeartsOff;
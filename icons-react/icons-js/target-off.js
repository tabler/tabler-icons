import * as React from "react";

function IconTargetOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/target-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.286 11.3a1 1 0 0 0 1.41 1.419" /><path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377 -2.611a5 5 0 0 0 -5.846 -5.836" /><path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683 -2.313a9 9 0 0 0 -12.076 -12.11" /><path d="M3 3l18 18" /></svg>;
}

export default IconTargetOff;
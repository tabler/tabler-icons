import * as React from "react";

function IconStorm({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-storm" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={3} /><circle cx={12} cy={12} r={7} /><path d="M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236" /><path d="M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236" /></svg>;
}

export default IconStorm;
import * as React from "react";

function IconVinyl({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vinyl" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.004 3.937a9 9 0 1 0 4.996 8.063" /><circle cx={12} cy={12} r={1} /><circle cx={20} cy={4} r={1} /><path d="M20 4l-3.5 10l-2.5 2" /></svg>;
}

export default IconVinyl;
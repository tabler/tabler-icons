import * as React from "react";

function IconBusOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bus-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={17} r={2} /><path d="M16.18 16.172a2 2 0 0 0 2.652 2.648" /><path d="M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" /><path d="M16 5l1.5 7h4.5" /><path d="M2 10h8m4 0h3" /><path d="M7 7v3" /><path d="M12 5v3" /><path d="M3 3l18 18" /></svg>;
}

export default IconBusOff;
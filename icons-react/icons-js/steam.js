import * as React from "react";

function IconSteam({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-steam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={4} r={1} /><circle cx={4} cy={12} r={1} /><circle cx={20} cy={12} r={1} /><circle cx={12} cy={20} r={1} /><path d="M5.5 5.5l3 3" /><path d="M15.5 15.5l3 3" /><path d="M18.5 5.5l-3 3" /><path d="M8.5 15.5l-3 3" /></svg>;
}

export default IconSteam;
import * as React from "react";

function IconStatusChange({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-status-change" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={18} r={2} /><circle cx={18} cy={18} r={2} /><path d="M6 12v-2a6 6 0 1 1 12 0v2" /><path d="M15 9l3 3l3 -3" /></svg>;
}

export default IconStatusChange;
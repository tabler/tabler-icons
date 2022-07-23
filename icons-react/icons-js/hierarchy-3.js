import * as React from "react";

function IconHierarchy3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={2} /><circle cx={8} cy={12} r={2} /><circle cx={12} cy={19} r={2} /><circle cx={20} cy={19} r={2} /><circle cx={4} cy={19} r={2} /><circle cx={16} cy={12} r={2} /><path d="M5 17l2 -3" /><path d="M9 10l2 -3" /><path d="M13 7l2 3" /><path d="M17 14l2 3" /><path d="M15 14l-2 3" /><path d="M9 14l2 3" /></svg>;
}

export default IconHierarchy3;
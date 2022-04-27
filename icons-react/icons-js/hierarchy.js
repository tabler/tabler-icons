import * as React from "react";

function IconHierarchy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/hierarchy"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={2} /><circle cx={5} cy={19} r={2} /><circle cx={19} cy={19} r={2} /><path d="M6.5 17.5l5.5 -4.5l5.5 4.5" /><line x1={12} y1={7} x2={12} y2={13} /></svg>;
}

export default IconHierarchy;
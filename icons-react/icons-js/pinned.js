import * as React from "react";

function IconPinned({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pinned" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" /><line x1={12} y1={16} x2={12} y2={21} /><line x1={8} y1={4} x2={16} y2={4} /></svg>;
}

export default IconPinned;
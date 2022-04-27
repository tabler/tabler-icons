import * as React from "react";

function IconIdBadge({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id-badge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/id-badge"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={5} y={3} width={14} height={18} rx={3} /><circle cx={12} cy={13} r={2} /><path d="M10 6h4" /><path d="M9 18h6" /></svg>;
}

export default IconIdBadge;
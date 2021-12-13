import * as React from "react";

function IconSeparatorHorizontal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-separator-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={12} x2={20} y2={12} /><polyline points="8 8 12 4 16 8" /><polyline points="16 16 12 20 8 16" /></svg>;
}

export default IconSeparatorHorizontal;
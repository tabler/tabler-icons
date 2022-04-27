import * as React from "react";

function IconLayoutColumns({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-columns" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/layout-columns"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><line x1={12} y1={4} x2={12} y2={20} /></svg>;
}

export default IconLayoutColumns;
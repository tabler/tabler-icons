import * as React from "react";

function IconLayout({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={6} height={5} rx={2} /><rect x={4} y={13} width={6} height={7} rx={2} /><rect x={14} y={4} width={6} height={16} rx={2} /></svg>;
}

export default IconLayout;
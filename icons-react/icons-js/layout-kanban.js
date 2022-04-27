import * as React from "react";

function IconLayoutKanban({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-kanban" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/layout-kanban"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={4} x2={10} y2={4} /><line x1={14} y1={4} x2={20} y2={4} /><rect x={4} y={8} width={6} height={12} rx={2} /><rect x={14} y={8} width={6} height={6} rx={2} /></svg>;
}

export default IconLayoutKanban;
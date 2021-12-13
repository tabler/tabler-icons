import * as React from "react";

function IconServer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-server" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={4} width={18} height={8} rx={3} /><rect x={3} y={12} width={18} height={8} rx={3} /><line x1={7} y1={8} x2={7} y2={8.01} /><line x1={7} y1={16} x2={7} y2={16.01} /></svg>;
}

export default IconServer;
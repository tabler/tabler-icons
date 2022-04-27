import * as React from "react";

function IconServer2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-server-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/server-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={4} width={18} height={8} rx={3} /><rect x={3} y={12} width={18} height={8} rx={3} /><line x1={7} y1={8} x2={7} y2={8.01} /><line x1={7} y1={16} x2={7} y2={16.01} /><path d="M11 8h6" /><path d="M11 16h6" /></svg>;
}

export default IconServer2;
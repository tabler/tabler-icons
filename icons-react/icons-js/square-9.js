import * as React from "react";

function IconSquare9({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-9" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={10} r={2} /><path d="M10 14a2 2 0 1 0 4 0v-4" /><rect x={4} y={4} width={16} height={16} rx={2} /></svg>;
}

export default IconSquare9;
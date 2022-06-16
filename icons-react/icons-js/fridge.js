import * as React from "react";

function IconFridge({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fridge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={5} y={3} width={14} height={18} rx={2} /><path d="M5 10h14" /><path d="M9 13v3" /><path d="M9 6v1" /></svg>;
}

export default IconFridge;
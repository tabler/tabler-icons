import * as React from "react";

function IconCooker({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cooker" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 7h.01" /><path d="M15 7h.01" /><path d="M9 7h.01" /><rect x={5} y={3} width={14} height={18} rx={2} /><path d="M9 15h6" /><path d="M5 11h14" /></svg>;
}

export default IconCooker;
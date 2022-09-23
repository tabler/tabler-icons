import * as React from "react";

function IconEPassport({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-e-passport" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={2} y={5} width={20} height={14} rx={1.999} /><circle cx={12} cy={12} r={3} /><path d="M9 12h-7" /><path d="M15 12h7" /></svg>;
}

export default IconEPassport;
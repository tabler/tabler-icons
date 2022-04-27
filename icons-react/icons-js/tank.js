import * as React from "react";

function IconTank({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tank" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/tank"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={2} y={12} width={18} height={6} rx={3} /><path d="M6 12l1 -5h5l3 5" /><line x1={21} y1={9} x2={13.2} y2={9} /></svg>;
}

export default IconTank;
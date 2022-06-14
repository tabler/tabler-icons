import * as React from "react";

function IconManualGearbox({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-manual-gearbox" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={6} r={2} /><circle cx={12} cy={6} r={2} /><circle cx={19} cy={6} r={2} /><circle cx={5} cy={18} r={2} /><circle cx={12} cy={18} r={2} /><line x1={5} y1={8} x2={5} y2={16} /><line x1={12} y1={8} x2={12} y2={16} /><path d="M19 8v2a2 2 0 0 1 -2 2h-12" /></svg>;
}

export default IconManualGearbox;
import * as React from "react";

function IconCircuitVoltmeter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-voltmeter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={7} /><path d="M5 12h-3" /><path d="M19 12h3" /><path d="M10 10l2 4l2 -4" /></svg>;
}

export default IconCircuitVoltmeter;
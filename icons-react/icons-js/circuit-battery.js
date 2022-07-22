import * as React from "react";

function IconCircuitBattery({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-battery" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M18 5v14" /><path d="M14 9v6" /><path d="M10 5v14" /><path d="M6 9v6" /></svg>;
}

export default IconCircuitBattery;
import * as React from "react";

function IconCircuitCapacitor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-capacitor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12h-8" /><path d="M2 12h8" /><path d="M10 7v10" /><path d="M14 7v10" /></svg>;
}

export default IconCircuitCapacitor;
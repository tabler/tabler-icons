import * as React from "react";

function IconCircuitGround({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-ground" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 13v-8" /><path d="M4 13h16" /><path d="M7 16h10" /><path d="M10 19h4" /></svg>;
}

export default IconCircuitGround;
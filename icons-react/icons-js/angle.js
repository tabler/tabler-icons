import * as React from "react";

function IconAngle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-angle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 19h-18l9 -15" /><path d="M20.615 15.171h.015" /><path d="M19.515 11.771h.015" /><path d="M17.715 8.671h.015" /><path d="M15.415 5.971h.015" /></svg>;
}

export default IconAngle;
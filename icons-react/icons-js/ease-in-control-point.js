import * as React from "react";

function IconEaseInControlPoint({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ease-in-control-point" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 19c8 0 18 -16 18 -16" /><path d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" /><path d="M17 19h-2" /><path d="M12 19h-2" /></svg>;
}

export default IconEaseInControlPoint;
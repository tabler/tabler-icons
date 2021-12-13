import * as React from "react";

function IconCornerLeftDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-left-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4" /></svg>;
}

export default IconCornerLeftDown;
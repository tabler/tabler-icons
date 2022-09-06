import * as React from "react";

function IconZip({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zip" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 16v-8h2a2 2 0 1 1 0 4h-2" /><path d="M12 8v8" /><path d="M4 8h4l-4 8h4" /></svg>;
}

export default IconZip;
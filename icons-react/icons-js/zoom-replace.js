import * as React from "react";

function IconZoomReplace({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-replace" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 21l-6 -6" /><path d="M3.291 8.003a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403" /><path d="M17 4v4h-4" /><path d="M16.705 12.005a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403" /><path d="M3 16v-4h4" /></svg>;
}

export default IconZoomReplace;
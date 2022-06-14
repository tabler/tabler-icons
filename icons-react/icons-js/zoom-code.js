import * as React from "react";

function IconZoomCode({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={10} r={7} /><path d="M21 21l-6 -6" /><path d="M8 8l-2 2l2 2" /><path d="M12 8l2 2l-2 2" /></svg>;
}

export default IconZoomCode;
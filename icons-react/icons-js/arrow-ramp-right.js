import * as React from "react";

function IconArrowRampRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-ramp-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={7} y1={3} x2={7} y2={11.707} /><path d="M11 7l-4 -4l-4 4" /><path d="M17 14l4 -4l-4 -4" /><path d="M7 21a11 11 0 0 1 11 -11h3" /></svg>;
}

export default IconArrowRampRight;
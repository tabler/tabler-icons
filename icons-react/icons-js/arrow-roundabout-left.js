import * as React from "react";

function IconArrowRoundaboutLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-roundabout-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 9h8a5 5 0 1 1 5 5v7" /><path d="M7 5l-4 4l4 4" /></svg>;
}

export default IconArrowRoundaboutLeft;
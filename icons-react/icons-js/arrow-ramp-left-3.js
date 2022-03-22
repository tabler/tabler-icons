import * as React from "react";

function IconArrowRampLeft3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-ramp-left-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3v6" /><path d="M8 16l-4 -4l4 -4" /><path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" /></svg>;
}

export default IconArrowRampLeft3;
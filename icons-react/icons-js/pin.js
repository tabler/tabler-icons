import * as React from "react";

function IconPin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/pin"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" /><line x1={9} y1={15} x2={4.5} y2={19.5} /><line x1={14.5} y1={4} x2={20} y2={9.5} /></svg>;
}

export default IconPin;
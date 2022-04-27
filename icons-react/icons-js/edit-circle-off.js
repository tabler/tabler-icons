import * as React from "react";

function IconEditCircleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit-circle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/edit-circle-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.507 10.498l-1.507 1.502v3h3l1.493 -1.498m2.002 -2.01l4.89 -4.907a2.1 2.1 0 0 0 -2.97 -2.97l-4.913 4.896" /><path d="M16 5l3 3" /><path d="M7.476 7.471a7.002 7.002 0 0 0 2.524 13.529a7.004 7.004 0 0 0 6.53 -4.474" /><path d="M3 3l18 18" /></svg>;
}

export default IconEditCircleOff;
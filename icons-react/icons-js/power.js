import * as React from "react";

function IconPower({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-power" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/power"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 6a7.75 7.75 0 1 0 10 0" /><line x1={12} y1={4} x2={12} y2={12} /></svg>;
}

export default IconPower;
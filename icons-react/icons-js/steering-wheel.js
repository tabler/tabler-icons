import * as React from "react";

function IconSteeringWheel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-steering-wheel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/steering-wheel"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><circle cx={12} cy={12} r={2} /><line x1={12} y1={14} x2={12} y2={21} /><line x1={10} y1={12} x2={3.25} y2={10} /><line x1={14} y1={12} x2={20.75} y2={10} /></svg>;
}

export default IconSteeringWheel;
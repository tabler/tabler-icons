import * as React from "react";

function IconMoodHappy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={9} y1={9} x2={9.01} y2={9} /><line x1={15} y1={9} x2={15.01} y2={9} /><path d="M8 13a4 4 0 1 0 8 0m0 0h-8" /></svg>;
}

export default IconMoodHappy;
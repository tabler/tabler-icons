import * as React from "react";

function IconMoodCrazyHappy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-crazy-happy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={7} y1={8.5} x2={10} y2={11.5} /><path d="M7 11.5l3 -3" /><line x1={14} y1={8.5} x2={17} y2={11.5} /><path d="M14 11.5l3 -3" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg>;
}

export default IconMoodCrazyHappy;
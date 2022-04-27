import * as React from "react";

function IconMoodSuprised({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-suprised" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/mood-suprised"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={9} y1={9} x2={9.01} y2={9} /><line x1={15} y1={9} x2={15.01} y2={9} /><circle cx={12} cy={15} r={2} /></svg>;
}

export default IconMoodSuprised;
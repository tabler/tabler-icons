import * as React from "react";

function IconMoodKid({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-kid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/mood-kid"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={9} y1={10} x2={9.01} y2={10} /><line x1={15} y1={10} x2={15.01} y2={10} /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><path d="M12 3a2 2 0 0 0 0 4" /></svg>;
}

export default IconMoodKid;
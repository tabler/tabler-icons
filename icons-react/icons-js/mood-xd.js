import * as React from "react";

function IconMoodXd({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-xd" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><circle transform="matrix(-1 0 0 1 24 0)" cx={12} cy={12} r={9} /><path d="M9 14h6a3 3 0 0 1 -6 0z" /><path d="M9 8l6 3" /><path d="M9 11l6 -3" /></svg>;
}

export default IconMoodXd;
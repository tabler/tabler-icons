import * as React from "react";

function IconMoodNervous({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-nervous" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/mood-nervous"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M8 16l2 -2l2 2l2 -2l2 2" /></svg>;
}

export default IconMoodNervous;
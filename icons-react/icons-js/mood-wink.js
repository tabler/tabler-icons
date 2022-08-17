import * as React from "react";

function IconMoodWink({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-wink" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M15 10h.01" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><path d="M8.5 8.5l1.5 1.5l-1.5 1.5" /></svg>;
}

export default IconMoodWink;
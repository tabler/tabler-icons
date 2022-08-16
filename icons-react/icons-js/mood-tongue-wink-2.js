import * as React from "react";

function IconMoodTongueWink2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-tongue-wink-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><circle transform="matrix(-1 0 0 1 24 0)" cx={12} cy={12} r={9} /><path d="M15 10h-.01" /><path d="M10 14l4 2a2 2 0 1 1 -4 0v-2z" /><path d="M7 10c.5 -1 2.5 -1 3 0" /></svg>;
}

export default IconMoodTongueWink2;
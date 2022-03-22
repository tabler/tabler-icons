import * as React from "react";

function IconArrowRotaryStraight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-straight" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={13} cy={13} r={3} /><path d="M13 16v5" /><path d="M13 3v7" /><path d="M9 7l4 -4l4 4" /></svg>;
}

export default IconArrowRotaryStraight;
import * as React from "react";

function IconArrowRotaryRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-rotary-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={8} cy={7} r={3} /><path d="M8 10v10" /><path d="M17 11l4 -4l-4 -4" /><path d="M11 7h10" /></svg>;
}

export default IconArrowRotaryRight;
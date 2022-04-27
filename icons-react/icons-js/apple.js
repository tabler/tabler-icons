import * as React from "react";

function IconApple({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apple" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/apple"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={14} r={7} /><path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" /><path d="M10 10.5c1.333 .667 2.667 .667 4 0" /></svg>;
}

export default IconApple;
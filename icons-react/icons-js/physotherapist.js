import * as React from "react";

function IconPhysotherapist({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-physotherapist" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/physotherapist"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l-1 -3l4 -2l4 1h3.5" /><circle cx={4} cy={19} r={1} /><circle cx={12} cy={6} r={1} /><path d="M12 17v-7" /><path d="M8 20h7l1 -4l4 -2" /><path d="M18 20h3" /></svg>;
}

export default IconPhysotherapist;
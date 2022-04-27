import * as React from "react";

function IconAspectRatio({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aspect-ratio" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/aspect-ratio"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M7 12v-3h3" /><path d="M17 12v3h-3" /></svg>;
}

export default IconAspectRatio;
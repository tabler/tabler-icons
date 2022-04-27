import * as React from "react";

function IconCone2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cone-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cone-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><ellipse cx={12} cy={7} rx={7} ry={3} /><path d="M19 7v.5l-7 12.5l-7 -12.5v-.5" /></svg>;
}

export default IconCone2;
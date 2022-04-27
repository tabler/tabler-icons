import * as React from "react";

function IconCone({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cone" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cone"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><ellipse transform="matrix(1 0 0 -1 0 34)" cx={12} cy={17} rx={7} ry={3} /><path d="M19 17v-.5l-7 -12.5l-7 12.5v.5" /></svg>;
}

export default IconCone;
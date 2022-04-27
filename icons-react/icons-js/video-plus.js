import * as React from "react";

function IconVideoPlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/video-plus"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><rect x={3} y={6} width={12} height={12} rx={2} /><line x1={7} y1={12} x2={11} y2={12} /><line x1={9} y1={10} x2={9} y2={14} /></svg>;
}

export default IconVideoPlus;
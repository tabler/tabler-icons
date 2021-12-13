import * as React from "react";

function IconHeadset({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headset" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={13} rx={2} width={4} height={6} /><rect x={16} y={13} rx={2} width={4} height={6} /><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><path d="M18 19a6 3 0 0 1 -6 3" /></svg>;
}

export default IconHeadset;
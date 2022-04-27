import * as React from "react";

function IconLayersIntersect({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-intersect" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/layers-intersect"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={8} y={4} width={12} height={12} rx={2} /><rect x={4} y={8} width={12} height={12} rx={2} /></svg>;
}

export default IconLayersIntersect;
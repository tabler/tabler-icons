import * as React from "react";

function IconTrees({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trees" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/trees"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" /><line x1={15} y1={21} x2={15} y2={18} /><path d="M8 13l-2 -2" /><path d="M8 12l2 -2" /><path d="M8 21v-13" /><path d="M5.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" /></svg>;
}

export default IconTrees;
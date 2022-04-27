import * as React from "react";

function IconBuilding({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/building"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={21} x2={21} y2={21} /><line x1={9} y1={8} x2={10} y2={8} /><line x1={9} y1={12} x2={10} y2={12} /><line x1={9} y1={16} x2={10} y2={16} /><line x1={14} y1={8} x2={15} y2={8} /><line x1={14} y1={12} x2={15} y2={12} /><line x1={14} y1={16} x2={15} y2={16} /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /></svg>;
}

export default IconBuilding;
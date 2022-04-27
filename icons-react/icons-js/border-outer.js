import * as React from "react";

function IconBorderOuter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-outer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/border-outer"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><line x1={12} y1={8} x2={12} y2={8.01} /><line x1={8} y1={12} x2={8} y2={12.01} /><line x1={12} y1={12} x2={12} y2={12.01} /><line x1={16} y1={12} x2={16} y2={12.01} /><line x1={12} y1={16} x2={12} y2={16.01} /></svg>;
}

export default IconBorderOuter;
import * as React from "react";

function IconPercentage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-percentage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/percentage"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={17} cy={17} r={1} /><circle cx={7} cy={7} r={1} /><line x1={6} y1={18} x2={18} y2={6} /></svg>;
}

export default IconPercentage;
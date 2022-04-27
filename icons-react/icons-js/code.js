import * as React from "react";

function IconCode({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/code"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="7 8 3 12 7 16" /><polyline points="17 8 21 12 17 16" /><line x1={14} y1={4} x2={10} y2={20} /></svg>;
}

export default IconCode;
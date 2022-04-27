import * as React from "react";

function IconStack2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/stack-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="12 4 4 8 12 12 20 8 12 4" /><polyline points="4 12 12 16 20 12" /><polyline points="4 16 12 20 20 16" /></svg>;
}

export default IconStack2;
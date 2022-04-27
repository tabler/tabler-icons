import * as React from "react";

function IconSelector({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/selector"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="8 9 12 5 16 9" /><polyline points="16 15 12 19 8 15" /></svg>;
}

export default IconSelector;
import * as React from "react";

function IconChevronsUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chevrons-up"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="7 11 12 6 17 11" /><polyline points="7 17 12 12 17 17" /></svg>;
}

export default IconChevronsUp;
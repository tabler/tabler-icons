import * as React from "react";

function IconChevronUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chevron-up"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="6 15 12 9 18 15" /></svg>;
}

export default IconChevronUp;
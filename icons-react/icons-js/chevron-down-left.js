import * as React from "react";

function IconChevronDownLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chevron-down-left"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 8v8h8" /></svg>;
}

export default IconChevronDownLeft;
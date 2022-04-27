import * as React from "react";

function IconChevronUpRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chevron-up-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 8h8v8" /></svg>;
}

export default IconChevronUpRight;
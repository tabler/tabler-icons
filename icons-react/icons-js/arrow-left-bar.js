import * as React from "react";

function IconArrowLeftBar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-bar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-left-bar"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12h-18" /><path d="M6 9l-3 3l3 3" /><path d="M21 9v6" /></svg>;
}

export default IconArrowLeftBar;
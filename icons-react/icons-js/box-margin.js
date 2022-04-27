import * as React from "react";

function IconBoxMargin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-margin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/box-margin"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 8h8v8h-8z" /><path d="M4 4v.01" /><path d="M8 4v.01" /><path d="M12 4v.01" /><path d="M16 4v.01" /><path d="M20 4v.01" /><path d="M4 20v.01" /><path d="M8 20v.01" /><path d="M12 20v.01" /><path d="M16 20v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>;
}

export default IconBoxMargin;
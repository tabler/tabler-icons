import * as React from "react";

function IconSword({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sword" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/sword"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" /><path d="M6.5 11.5l6 6" /></svg>;
}

export default IconSword;
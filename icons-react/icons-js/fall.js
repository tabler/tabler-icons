import * as React from "react";

function IconFall({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fall" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/fall"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" /><path d="M6 16l-1 -4l3 -4" /><circle cx={6} cy={5} r={1} /><path d="M13.5 12h2.5l4 2" /></svg>;
}

export default IconFall;
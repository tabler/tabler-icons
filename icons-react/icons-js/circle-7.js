import * as React from "react";

function IconCircle7({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-7" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/circle-7"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 8h4l-2 8" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconCircle7;
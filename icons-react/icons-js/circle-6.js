import * as React from "react";

function IconCircle6({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-6" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/circle-6"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={14} r={2} /><path d="M14 10a2 2 0 1 0 -4 0v4" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconCircle6;
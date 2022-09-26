import * as React from "react";

function IconCodeCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l-2 -2l2 -2" /><path d="M14 10l2 2l-2 2" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconCodeCircle;
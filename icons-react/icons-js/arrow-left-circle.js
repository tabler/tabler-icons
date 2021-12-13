import * as React from "react";

function IconArrowLeftCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 12h-14" /><path d="M6 9l-3 3l3 3" /><circle cx={19} cy={12} r={2} /></svg>;
}

export default IconArrowLeftCircle;
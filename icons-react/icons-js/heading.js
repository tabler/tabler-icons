import * as React from "react";

function IconHeading({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-heading" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12h10" /><path d="M7 4v16" /><path d="M17 4v16" /><path d="M15 20h4" /><path d="M15 4h4" /><path d="M5 20h4" /><path d="M5 4h4" /></svg>;
}

export default IconHeading;
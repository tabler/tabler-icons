import * as React from "react";

function IconStrikethrough({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-strikethrough" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 5v9a5 5 0 0 0 10 0v-9" /><path d="M4 12h16" /></svg>;
}

export default IconStrikethrough;
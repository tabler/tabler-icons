import * as React from "react";

function IconCrane({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crane" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21h6" /><path d="M9 21v-18l-6 6h18" /><path d="M9 3l10 6" /><path d="M17 9v4a2 2 0 1 1 -2 2" /></svg>;
}

export default IconCrane;
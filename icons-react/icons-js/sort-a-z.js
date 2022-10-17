import * as React from "react";

function IconSortAZ({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-a-z" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 8h4l-4 8h4" /><path d="M4 16v-6a2 2 0 1 1 4 0v6" /><path d="M4 13h4" /><path d="M11 12h2" /></svg>;
}

export default IconSortAZ;
import * as React from "react";

function IconCornerRightUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-right-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4" /></svg>;
}

export default IconCornerRightUp;
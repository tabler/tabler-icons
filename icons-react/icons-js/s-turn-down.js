import * as React from "react";

function IconSTurnDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-s-turn-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 5.5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /><path d="M4.5 7.5v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" /><path d="M15.5 18.5l3 3l3 -3" /></svg>;
}

export default IconSTurnDown;
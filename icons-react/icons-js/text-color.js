import * as React from "react";

function IconTextColor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-color" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15v-7a3 3 0 0 1 6 0v7" /><path d="M9 11h6" /><path d="M5 19h14" /></svg>;
}

export default IconTextColor;
import * as React from "react";

function IconUnderline({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-underline" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/underline"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 5v5a5 5 0 0 0 10 0v-5" /><path d="M5 19h14" /></svg>;
}

export default IconUnderline;
import * as React from "react";

function IconNumber9({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-number-9" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/number-9"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" /><path d="M8 16a4 4 0 1 0 8 0v-8" /></svg>;
}

export default IconNumber9;
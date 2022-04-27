import * as React from "react";

function IconCross({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cross" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cross"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z" /></svg>;
}

export default IconCross;
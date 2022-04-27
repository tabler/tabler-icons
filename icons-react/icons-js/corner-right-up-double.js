import * as React from "react";

function IconCornerRightUpDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-right-up-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/corner-right-up-double"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19h6a3 3 0 0 0 3 -3v-7" /><path d="M10 13l4 -4l4 4m-8 -5l4 -4l4 4" /></svg>;
}

export default IconCornerRightUpDouble;
import * as React from "react";

function IconRadiusTopRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-radius-top-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/radius-top-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5h6a8 8 0 0 1 8 8v6" /></svg>;
}

export default IconRadiusTopRight;
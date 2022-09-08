import * as React from "react";

function IconHexagon7({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hexagon-7" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.02 6.858a2.006 2.006 0 0 1 1.003 1.752v6.555c0 .728 -.395 1.4 -1.032 1.753l-6.017 3.844a2.006 2.006 0 0 1 -1.948 0l-6.016 -3.844a2.006 2.006 0 0 1 -1.032 -1.752v-6.556c0 -.728 .395 -1.4 1.032 -1.753l6.017 -3.582a2.062 2.062 0 0 1 2.006 0l6.017 3.583h-.029z" /><path d="M10 8h4l-2 8" /></svg>;
}

export default IconHexagon7;
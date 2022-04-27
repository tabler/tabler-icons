import * as React from "react";

function IconOmega({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-omega" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/omega"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5" /></svg>;
}

export default IconOmega;
import * as React from "react";

function IconMist({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mist" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/mist"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5h3m4 0h9" /><path d="M3 10h11m4 0h1" /><path d="M5 15h5m4 0h7" /><path d="M3 20h9m4 0h3" /></svg>;
}

export default IconMist;
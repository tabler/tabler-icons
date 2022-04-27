import * as React from "react";

function IconDroplet({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/droplet"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" /></svg>;
}

export default IconDroplet;
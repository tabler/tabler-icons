import * as React from "react";

function IconTent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tent" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/tent"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" /></svg>;
}

export default IconTent;
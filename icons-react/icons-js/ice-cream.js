import * as React from "react";

function IconIceCream({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ice-cream" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ice-cream"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21.5v-4.5" /><path d="M8 17h8v-10a4 4 0 1 0 -8 0v10z" /><path d="M8 10.5l8 -3.5" /><path d="M8 14.5l8 -3.5" /></svg>;
}

export default IconIceCream;
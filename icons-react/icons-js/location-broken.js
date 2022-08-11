import * as React from "react";

function IconLocationBroken({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-location-broken" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 20l-3 -6l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5c-1.698 4.703 -3.05 8.37 -4 11" /><path d="M16 17l4 4m0 -4l-4 4" /></svg>;
}

export default IconLocationBroken;
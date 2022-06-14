import * as React from "react";

function IconDropletFilled2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-filled-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" /><path d="M6 14h12" /><path d="M7.305 17.695l3.695 -3.695" /><path d="M10.26 19.74l5.74 -5.74l-5.74 5.74z" /></svg>;
}

export default IconDropletFilled2;
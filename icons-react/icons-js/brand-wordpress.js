import * as React from "react";

function IconBrandWordpress({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-wordpress" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.5 6h5.5" /><path d="M2 6h5" /><path d="M10.5 6l6 13l4.5 -9" /><path d="M13.5 6l4.5 9.5" /><path d="M2.5 6l6 13l4 -8.5" /><path d="M5.5 6l4.5 9.5" /><path d="M21 10c.236 -.739 1 -1.91 1 -3.5c0 -2.492 -1.034 -3.5 -2.5 -3.5c-1.197 0 -1.5 1.137 -1.5 2c0 2.562 3 2.882 3 5z" /></svg>;
}

export default IconBrandWordpress;
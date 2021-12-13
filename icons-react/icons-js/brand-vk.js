import * as React from "react";

function IconBrandVk({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12" /><path d="M20 6c-1 2 -3 5 -5 6h-3" /><path d="M20 18c-1 -2 -3 -5 -5 -6" /></svg>;
}

export default IconBrandVk;
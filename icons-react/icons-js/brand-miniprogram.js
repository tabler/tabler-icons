import * as React from "react";

function IconBrandMiniprogram({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-miniprogram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><path d="M7.996 11.503a2.5 2.5 0 1 0 4.004 1.997v-3a2.5 2.5 0 1 1 3.995 2.004" /></svg>;
}

export default IconBrandMiniprogram;
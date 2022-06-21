import * as React from "react";

function IconBrandZoom({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-zoom" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.011 9.385v5.128l3.989 3.487v-12z" /><path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a0.991 .991 0 0 1 -.975 1.001h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8.002a0.882 .882 0 0 1 .208 -.71a0.841 .841 0 0 1 .67 -.287z" /></svg>;
}

export default IconBrandZoom;
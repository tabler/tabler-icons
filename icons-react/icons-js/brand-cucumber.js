import * as React from "react";

function IconBrandCucumber({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-cucumber" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8.001 8.001 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01z" /><path d="M10.5 8l-.5 -1" /><path d="M13.5 14l.5 1" /><path d="M9 12.5l-1 .5" /><path d="M11 14l-.5 1" /><path d="M13 8l.5 -1" /><path d="M16 12.5l-1 -.5" /><path d="M9 10l-1 -.5" /></svg>;
}

export default IconBrandCucumber;
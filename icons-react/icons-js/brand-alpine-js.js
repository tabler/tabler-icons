import * as React from "react";

function IconBrandAlpineJs({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-alpine-js" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 10.375l5.455 5.625h6.545l-8.727 -9z" /><path d="M15 12.5l3.5 3.5l3.5 -3.5l-3.5 -3.5z" /></svg>;
}

export default IconBrandAlpineJs;
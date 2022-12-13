import * as React from "react";

function IconBrandCitymapper({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-citymapper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" /><path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" /><path d="M8 12h8" /><path d="M13 9l3 3l-3 3" /></svg>;
}

export default IconBrandCitymapper;
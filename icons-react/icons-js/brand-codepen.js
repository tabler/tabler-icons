import * as React from "react";

function IconBrandCodepen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-codepen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 15l9 6l9 -6l-9 -6l-9 6" /><path d="M3 9l9 6l9 -6l-9 -6l-9 6" /><line x1={3} y1={9} x2={3} y2={15} /><line x1={21} y1={9} x2={21} y2={15} /><line x1={12} y1={3} x2={12} y2={9} /><line x1={12} y1={15} x2={12} y2={21} /></svg>;
}

export default IconBrandCodepen;
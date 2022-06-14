import * as React from "react";

function IconGlassFull({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-glass-full" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={8} y1={21} x2={16} y2={21} /><line x1={12} y1={15} x2={12} y2={21} /><path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" /><path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" /></svg>;
}

export default IconGlassFull;
import * as React from "react";

function IconBrandSymfony({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-symfony" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 13c.458 .667 1.125 1 2 1c1.313 0 2 -.875 2 -1.5c0 -1.5 -2 -1 -2 -2c0 -.625 .516 -1.5 1.5 -1.5c2.5 0 1.563 2 5.5 2c.667 0 1 -.333 1 -1" /><path d="M9 17c-.095 .667 .238 1 1 1c1.714 0 2.714 -2 3 -6c.286 -4 1.571 -6 3 -6c.571 0 .905 .333 1 1" /><path d="M22 12c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10a10 10 0 0 1 10 10z" /></svg>;
}

export default IconBrandSymfony;
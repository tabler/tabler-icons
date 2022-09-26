import * as React from "react";

function IconEggs({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eggs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 22c-3 0 -4.868 -2.118 -4.995 -5c-.005 -3 1.995 -5 4.995 -5c4 0 8.01 2.5 8.005 5c-.005 2.5 -4.005 5 -8.005 5z" /><path d="M8 18c-3.03 -.196 -5 -2.309 -5 -5.38c0 -4.307 2.75 -8.625 5.5 -8.62c2.614 .005 5.248 3.915 5.5 8" /></svg>;
}

export default IconEggs;
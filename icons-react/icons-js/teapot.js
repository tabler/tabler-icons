import * as React from "react";

function IconTeapot({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-teapot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.29 3h3.42a2 2 0 0 1 1.988 1.78l1.555 14a2 2 0 0 1 -1.988 2.22h-6.53a2 2 0 0 1 -1.988 -2.22l1.555 -14a2 2 0 0 1 1.988 -1.78z" /><path d="M7.47 12.5l-4.257 -5.019a0.899 .899 0 0 1 .69 -1.481h13.09a3.004 3.004 0 0 1 3.007 3v3c0 1.657 -1.346 3 -3.007 3" /><path d="M7 17h10" /></svg>;
}

export default IconTeapot;
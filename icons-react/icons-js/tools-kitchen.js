import * as React from "react";

function IconToolsKitchen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools-kitchen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 3h8l-1 9h-6z" /><path d="M7 18h2v3h-2z" /><path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" /><path d="M20 15v6h-1v-3" /><line x1={8} y1={12} x2={8} y2={18} /></svg>;
}

export default IconToolsKitchen;
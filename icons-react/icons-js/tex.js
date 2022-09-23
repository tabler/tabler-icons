import * as React from "react";

function IconTex({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tex" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 8v-1h-6v1" /><path d="M6 15v-8" /><path d="M21 15l-5 -8" /><path d="M16 15l5 -8" /><path d="M14 11h-4v8h4" /><path d="M10 15h3" /></svg>;
}

export default IconTex;
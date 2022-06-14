import * as React from "react";

function IconBrandNotion({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-notion" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M7 7h3l6 6" /><path d="M8 7v10" /><path d="M7 17h2" /><path d="M15 7h2" /><path d="M16 7v10h-1l-7 -7" /></svg>;
}

export default IconBrandNotion;
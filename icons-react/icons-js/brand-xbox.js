import * as React from "react";

function IconBrandXbox({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-xbox" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" /><path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" /></svg>;
}

export default IconBrandXbox;
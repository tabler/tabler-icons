import * as React from "react";

function IconBrandShazam({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-shazam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12l2 -2a2.828 2.828 0 0 1 4 0a2.828 2.828 0 0 1 0 4l-3 3" /><path d="M14 12l-2 2a2.828 2.828 0 1 1 -4 -4l3 -3" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconBrandShazam;
import * as React from "react";

function IconAnchor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-anchor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/anchor"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" /><circle cx={12} cy={6} r={3} /></svg>;
}

export default IconAnchor;
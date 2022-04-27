import * as React from "react";

function IconTarget({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/target"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={1} /><circle cx={12} cy={12} r={5} /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconTarget;
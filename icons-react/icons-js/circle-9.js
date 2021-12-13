import * as React from "react";

function IconCircle9({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-9" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={10} r={2} /><path d="M10 14a2 2 0 1 0 4 0v-4" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconCircle9;
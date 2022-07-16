import * as React from "react";

function IconRating18Plus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rating-18-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><circle cx={11.5} cy={10.5} r={1.5} /><circle cx={11.5} cy={13.5} r={1.5} /><path d="M7 15v-6" /><path d="M15.5 12h3" /><path d="M17 10.5v3" /></svg>;
}

export default IconRating18Plus;
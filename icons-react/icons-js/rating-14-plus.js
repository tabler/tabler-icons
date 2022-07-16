import * as React from "react";

function IconRating14Plus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rating-14-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M7 15v-6" /><path d="M15.5 12h3" /><path d="M17 10.5v3" /><path d="M12.5 15v-6m-2.5 0v4h3" /></svg>;
}

export default IconRating14Plus;
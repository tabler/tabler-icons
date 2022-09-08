import * as React from "react";

function IconJewishStar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-jewish-star" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.748 5.753l2.252 -3.753l3 5h6l-3 5l3 5m-4 0h-2l-3 5l-3 -5h-6l3 -5l-3 -5h4" /><path d="M3 3l18 18" /></svg>;
}

export default IconJewishStar;
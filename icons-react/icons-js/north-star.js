import * as React from "react";

function IconNorthStar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-north-star" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12h18" /><path d="M12 21v-18" /><path d="M7.5 7.5l9 9" /><path d="M7.5 16.5l9 -9" /></svg>;
}

export default IconNorthStar;
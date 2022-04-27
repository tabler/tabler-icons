import * as React from "react";

function IconTrendingDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/trending-down"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 7 9 13 13 9 21 17" /><polyline points="21 10 21 17 14 17" /></svg>;
}

export default IconTrendingDown;
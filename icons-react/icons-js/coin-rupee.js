import * as React from "react";

function IconCoinRupee({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin-rupee" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" /><path d="M9 11h6" /></svg>;
}

export default IconCoinRupee;
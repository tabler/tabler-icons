import * as React from "react";

function IconHomeSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2" /><circle cx={18} cy={18} r={3} /><path d="M20.2 20.2l1.8 1.8" /></svg>;
}

export default IconHomeSearch;
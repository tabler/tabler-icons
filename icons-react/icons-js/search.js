import * as React from "react";

function IconSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/search"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={10} r={7} /><line x1={21} y1={21} x2={15} y2={15} /></svg>;
}

export default IconSearch;
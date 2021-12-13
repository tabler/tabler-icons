import * as React from "react";

function IconArrowsJoin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-join" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7h5l3.5 5h9.5" /><path d="M3 17h5l3.495 -5" /><path d="M18 15l3 -3l-3 -3" /></svg>;
}

export default IconArrowsJoin;
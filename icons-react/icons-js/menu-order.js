import * as React from "react";

function IconMenuOrder({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-order" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 10h16" /><path d="M4 14h16" /><path d="M9 18l3 3l3 -3" /><path d="M9 6l3 -3l3 3" /></svg>;
}

export default IconMenuOrder;
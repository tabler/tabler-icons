import * as React from "react";

function IconMenu({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/menu"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={8} x2={20} y2={8} /><line x1={4} y1={16} x2={20} y2={16} /></svg>;
}

export default IconMenu;
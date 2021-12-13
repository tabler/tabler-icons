import * as React from "react";

function IconScreenShare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-screen-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" /><line x1={7} y1={20} x2={17} y2={20} /><line x1={9} y1={16} x2={9} y2={20} /><line x1={15} y1={16} x2={15} y2={20} /><path d="M17 4h4v4" /><path d="M16 9l5 -5" /></svg>;
}

export default IconScreenShare;
import * as React from "react";

function IconBrowserPlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={1} /><path d="M4 8h16" /><path d="M8 4v4" /><path d="M10 14h4" /><path d="M12 12v4" /></svg>;
}

export default IconBrowserPlus;
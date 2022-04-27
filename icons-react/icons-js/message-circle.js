import * as React from "react";

function IconMessageCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/message-circle"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /><line x1={12} y1={12} x2={12} y2={12.01} /><line x1={8} y1={12} x2={8} y2={12.01} /><line x1={16} y1={12} x2={16} y2={12.01} /></svg>;
}

export default IconMessageCircle;
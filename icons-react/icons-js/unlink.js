import * as React from "react";

function IconUnlink({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-unlink" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" /><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /><line x1={16} y1={21} x2={16} y2={19} /><line x1={19} y1={16} x2={21} y2={16} /><line x1={3} y1={8} x2={5} y2={8} /><line x1={8} y1={3} x2={8} y2={5} /></svg>;
}

export default IconUnlink;
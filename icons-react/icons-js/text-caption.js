import * as React from "react";

function IconTextCaption({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-caption" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 15h16" /><rect x={4} y={4} width={6} height={6} rx={1} /><path d="M4 20h12" /></svg>;
}

export default IconTextCaption;
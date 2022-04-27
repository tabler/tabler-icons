import * as React from "react";

function IconPeace({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-peace" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/peace"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={12} y1={3} x2={12} y2={21} /><line x1={12} y1={12} x2={18.3} y2={18.3} /><line x1={12} y1={12} x2={5.7} y2={18.3} /></svg>;
}

export default IconPeace;
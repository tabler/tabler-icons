import * as React from "react";

function IconKey({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/key"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={8} cy={15} r={4} /><line x1={10.85} y1={12.15} x2={19} y2={4} /><line x1={18} y1={5} x2={20} y2={7} /><line x1={15} y1={8} x2={17} y2={10} /></svg>;
}

export default IconKey;
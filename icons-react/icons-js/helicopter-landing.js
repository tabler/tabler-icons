import * as React from "react";

function IconHelicopterLanding({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-helicopter-landing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/helicopter-landing"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><line x1={9} y1={8} x2={9} y2={16} /><line x1={9} y1={12} x2={15} y2={12} /><line x1={15} y1={8} x2={15} y2={16} /></svg>;
}

export default IconHelicopterLanding;
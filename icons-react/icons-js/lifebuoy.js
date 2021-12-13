import * as React from "react";

function IconLifebuoy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={4} /><circle cx={12} cy={12} r={9} /><line x1={15} y1={15} x2={18.35} y2={18.35} /><line x1={9} y1={15} x2={5.65} y2={18.35} /><line x1={5.65} y1={5.65} x2={9} y2={9} /><line x1={18.35} y1={5.65} x2={15} y2={9} /></svg>;
}

export default IconLifebuoy;
import * as React from "react";

function IconFloatNone({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-float-none" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect width={6} height={6} x={4} y={5} rx={1} /><line x1={4} y1={15} x2={20} y2={15} /><line x1={4} y1={19} x2={20} y2={19} /></svg>;
}

export default IconFloatNone;
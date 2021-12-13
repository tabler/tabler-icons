import * as React from "react";

function IconAntennaBars2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna-bars-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={6} y1={18} x2={6} y2={15} /><line x1={10} y1={18} x2={10} y2={18.01} /><line x1={14} y1={18} x2={14} y2={18.01} /><line x1={18} y1={18} x2={18} y2={18.01} /></svg>;
}

export default IconAntennaBars2;
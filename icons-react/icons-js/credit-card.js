import * as React from "react";

function IconCreditCard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={5} width={18} height={14} rx={3} /><line x1={3} y1={10} x2={21} y2={10} /><line x1={7} y1={15} x2={7.01} y2={15} /><line x1={11} y1={15} x2={13} y2={15} /></svg>;
}

export default IconCreditCard;
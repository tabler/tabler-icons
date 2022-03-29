import * as React from "react";

function IconDice2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dice-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><circle cx={9.5} cy={9.5} r={0.5} fill="currentColor" /><circle cx={14.5} cy={14.5} r={0.5} fill="currentColor" /></svg>;
}

export default IconDice2;
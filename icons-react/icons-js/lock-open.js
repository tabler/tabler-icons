import * as React from "react";

function IconLockOpen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-open" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={5} y={11} width={14} height={10} rx={2} /><circle cx={12} cy={16} r={1} /><path d="M8 11v-5a4 4 0 0 1 8 0" /></svg>;
}

export default IconLockOpen;
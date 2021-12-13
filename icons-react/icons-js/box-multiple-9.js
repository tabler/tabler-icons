import * as React from "react";

function IconBoxMultiple9({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-multiple-9" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={7} y={3} width={14} height={14} rx={2} /><circle cx={14} cy={8} r={2} /><path d="M12 12a2 2 0 1 0 4 0v-4" /><path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /></svg>;
}

export default IconBoxMultiple9;
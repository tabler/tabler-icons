import * as React from "react";

function IconWashDry1({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wash-dry-1" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={3} width={18} height={18} rx={3} /><circle cx={12} cy={12} r={6} /><path d="M12 12h.01" /></svg>;
}

export default IconWashDry1;
import * as React from "react";

function IconBrandMastercard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-mastercard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={14} cy={12} r={3} /><path d="M12 9.765a3 3 0 1 0 0 4.47" /><rect x={3} y={5} width={18} height={14} rx={2} /></svg>;
}

export default IconBrandMastercard;
import * as React from "react";

function IconMilkshake({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-milkshake" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 10a5 5 0 0 0 -10 0" /><rect x={6} y={10} width={12} height={3} rx={1} /><path d="M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243" /><path d="M12 5v-2" /></svg>;
}

export default IconMilkshake;
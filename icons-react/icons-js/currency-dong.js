import * as React from "react";

function IconCurrencyDong({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dong" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19h12" /><circle cx={12} cy={12} r={4} /><path d="M16 16v-12" /><path d="M17 5h-4" /></svg>;
}

export default IconCurrencyDong;
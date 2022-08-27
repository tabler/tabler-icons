import * as React from "react";

function IconCurrencyKip({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-kip" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12h12" /><path d="M9 5v14" /><path d="M16 19a7 7 0 0 0 -7 -7a7 7 0 0 0 7 -7" /></svg>;
}

export default IconCurrencyKip;
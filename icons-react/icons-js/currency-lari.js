import * as React from "react";

function IconCurrencyLari({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-lari" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 13a6 6 0 1 0 -6 6" /><path d="M6 19h12" /><path d="M10 5v7" /><path d="M14 12v-7" /></svg>;
}

export default IconCurrencyLari;
import * as React from "react";

function IconCurrencyNaira({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-naira" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-naira"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" /><path d="M5 10h14" /><path d="M5 14h14" /></svg>;
}

export default IconCurrencyNaira;
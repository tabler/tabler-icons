import * as React from "react";

function IconCurrencyEuro({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-euro" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-euro"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.2 7a6 7 0 1 0 0 10" /><path d="M13 10h-8m0 4h8" /></svg>;
}

export default IconCurrencyEuro;
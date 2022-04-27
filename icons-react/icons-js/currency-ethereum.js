import * as React from "react";

function IconCurrencyEthereum({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-ethereum" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-ethereum"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12l6 -9l6 9l-6 9z" /><path d="M6 12l6 -3l6 3l-6 2z" /></svg>;
}

export default IconCurrencyEthereum;
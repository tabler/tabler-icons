import * as React from "react";

function IconCurrencyDinar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dinar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-dinar"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 20.01v-.01" /><path d="M6 13l2.386 -.9a1 1 0 0 0 -.095 -1.902l-1.514 -.404a1 1 0 0 1 -.102 -1.9l2.325 -.894" /><path d="M3 14v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983 -3.32l-1.144 -10.68" /><path d="M16 17l1 1h2.004a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" /></svg>;
}

export default IconCurrencyDinar;
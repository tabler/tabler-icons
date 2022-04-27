import * as React from "react";

function IconCurrencyRenminbi({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-renminbi" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-renminbi"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 9v8a2 2 0 1 0 4 0" /><path d="M19 9h-14" /><path d="M19 5h-14" /><path d="M9 9v4c0 2.5 -.667 4 -2 6" /></svg>;
}

export default IconCurrencyRenminbi;
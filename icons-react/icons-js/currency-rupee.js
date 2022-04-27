import * as React from "react";

function IconCurrencyRupee({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-rupee" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-rupee"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" /><line x1={7} y1={9} x2={18} y2={9} /></svg>;
}

export default IconCurrencyRupee;
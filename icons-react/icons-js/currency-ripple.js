import * as React from "react";

function IconCurrencyRipple({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-ripple" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-ripple"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={12} r={3} /><circle cx={17} cy={7} r={3} /><circle cx={17} cy={17} r={3} /><path d="M10 12h3l2 -2.5" /><path d="M15 14.5l-2 -2.5" /></svg>;
}

export default IconCurrencyRipple;
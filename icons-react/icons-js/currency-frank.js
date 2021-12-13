import * as React from "react";

function IconCurrencyFrank({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-frank" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 5h-6a2 2 0 0 0 -2 2v12" /><path d="M7 15h4" /><path d="M9 11h7" /></svg>;
}

export default IconCurrencyFrank;
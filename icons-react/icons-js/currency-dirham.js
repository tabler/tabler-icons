import * as React from "react";

function IconCurrencyDirham({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dirham" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.5 19h-3.5" /><path d="M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521" /><path d="M7 4v9" /><path d="M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744" /><path d="M11 13.01v-.01" /></svg>;
}

export default IconCurrencyDirham;
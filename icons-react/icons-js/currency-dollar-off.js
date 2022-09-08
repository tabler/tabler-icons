import * as React from "react";

function IconCurrencyDollarOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dollar-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4m-2.557 1.431a3 3 0 0 0 2.557 4.569h2m4.564 4.558a2.998 2.998 0 0 1 -2.564 1.442h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /><path d="M3 3l18 18" /></svg>;
}

export default IconCurrencyDollarOff;
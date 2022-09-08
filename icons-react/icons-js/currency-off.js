import * as React from "react";

function IconCurrencyOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896" /><path d="M4 4l3 3" /><path d="M20 4l-3 3" /><path d="M4 20l3 -3" /><path d="M20 20l-3 -3" /><path d="M3 3l18 18" /></svg>;
}

export default IconCurrencyOff;
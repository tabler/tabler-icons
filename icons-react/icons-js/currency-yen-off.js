import * as React from "react";

function IconCurrencyYenOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-yen-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 19v-7m5 -7l-3.328 4.66" /><path d="M8 17h8" /><path d="M8 13h5" /><path d="M3 3l18 18" /></svg>;
}

export default IconCurrencyYenOff;
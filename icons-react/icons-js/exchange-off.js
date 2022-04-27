import * as React from "react";

function IconExchangeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exchange-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/exchange-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={18} r={2} /><circle cx={19} cy={6} r={2} /><path d="M19 8v5c0 .594 -.104 1.164 -.294 1.692m-1.692 2.298a4.978 4.978 0 0 1 -3.014 1.01h-3l3 -3" /><path d="M14 21l-3 -3" /><path d="M5 16v-5c0 -1.632 .782 -3.082 1.992 -3.995m3.008 -1.005h3l-3 -3" /><path d="M11.501 7.499l1.499 -1.499" /><path d="M3 3l18 18" /></svg>;
}

export default IconExchangeOff;
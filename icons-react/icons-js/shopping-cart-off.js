import * as React from "react";

function IconShoppingCartOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/shopping-cart-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={19} r={2} /><path d="M17 17a2 2 0 1 0 2 2" /><path d="M17 17h-11v-11" /><path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" /><path d="M3 3l18 18" /></svg>;
}

export default IconShoppingCartOff;
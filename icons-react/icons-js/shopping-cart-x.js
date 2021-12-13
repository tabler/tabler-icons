import * as React from "react";

function IconShoppingCartX({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={19} r={2} /><circle cx={17} cy={19} r={2} /><path d="M17 17h-11v-14h-2" /><path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" /><path d="M17 3l4 4" /><path d="M21 3l-4 4" /></svg>;
}

export default IconShoppingCartX;
import * as React from "react";

function IconShoppingCartDiscount({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={19} r={2} /><circle cx={17} cy={19} r={2} /><path d="M17 17h-11v-14h-2" /><path d="M20 6l-1 7h-13" /><path d="M10 10l6 -6" /><circle cx={10.5} cy={4.5} r={0.5} /><circle cx={15.5} cy={9.5} r={0.5} /></svg>;
}

export default IconShoppingCartDiscount;
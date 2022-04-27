import * as React from "react";

function IconBasket({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/basket"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="7 10 12 4 17 10" /><path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" /><circle cx={12} cy={15} r={2} /></svg>;
}

export default IconBasket;
import * as React from "react";

function IconCurrencyRubel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-rubel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/currency-rubel"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" /><path d="M14 15h-8" /></svg>;
}

export default IconCurrencyRubel;
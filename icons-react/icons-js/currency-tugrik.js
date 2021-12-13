import * as React from "react";

function IconCurrencyTugrik({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-tugrik" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 6h10" /><path d="M12 6v13" /><path d="M8 17l8 -3" /><path d="M16 10l-8 3" /></svg>;
}

export default IconCurrencyTugrik;
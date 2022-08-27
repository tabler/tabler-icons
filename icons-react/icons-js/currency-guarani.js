import * as React from "react";

function IconCurrencyGuarani({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-guarani" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a5.996 5.996 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4.004 -1.536c.732 -.66 1.064 -2.148 .997 -4.464h-5" /><path d="M12 20v-16" /></svg>;
}

export default IconCurrencyGuarani;
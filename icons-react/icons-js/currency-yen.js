import * as React from "react";

function IconCurrencyYen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-yen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 19v-7l-5 -7m10 0l-5 7" /><line x1={8} y1={17} x2={16} y2={17} /><line x1={8} y1={13} x2={16} y2={13} /></svg>;
}

export default IconCurrencyYen;
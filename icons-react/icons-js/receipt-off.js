import * as React from "react";

function IconReceiptOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/receipt-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><line x1={11} y1={7} x2={15} y2={7} /><line x1={9} y1={11} x2={11} y2={11} /><line x1={13} y1={15} x2={15} y2={15} /><line x1={15} y1={11} x2={15} y2={11.01} /><line x1={3} y1={3} x2={21} y2={21} /></svg>;
}

export default IconReceiptOff;
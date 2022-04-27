import * as React from "react";

function IconReceiptRefund({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-refund" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/receipt-refund"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2" /></svg>;
}

export default IconReceiptRefund;
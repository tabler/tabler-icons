import * as React from "react";

function IconSignatureOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-signature-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/signature-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -.394 -.017 -.735 -.05 -1.033m-1.95 -1.967c-1 0 -2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.219 0 .708 -.341 1.231 -.742m3.769 -.258c.303 .245 .64 .677 1 1" /><path d="M3 3l18 18" /></svg>;
}

export default IconSignatureOff;
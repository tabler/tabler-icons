import * as React from "react";

function IconBluetoothX({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bluetooth-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l10 8l-5 4v-16l1.003 .802m0 6.396l-6.003 4.802" /><path d="M16 6l4 4" /><path d="M20 6l-4 4" /></svg>;
}

export default IconBluetoothX;
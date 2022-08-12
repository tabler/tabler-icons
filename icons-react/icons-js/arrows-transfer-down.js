import * as React from "react";

function IconArrowsTransferDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-transfer-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3v6" /><path d="M10 18l-3 3l-3 -3" /><path d="M7 21v-18" /><path d="M20 6l-3 -3l-3 3" /><path d="M17 21v-2" /><path d="M17 15v-2" /></svg>;
}

export default IconArrowsTransferDown;
import * as React from "react";

function IconCellSignal5({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cell-signal-5" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 20h-15.269a0.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a0.731 .731 0 0 1 1.249 .517v15.269z" /><path d="M16 7v13" /><path d="M12 20v-9" /><path d="M8 20v-5" /></svg>;
}

export default IconCellSignal5;
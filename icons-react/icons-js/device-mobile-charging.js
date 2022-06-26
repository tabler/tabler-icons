import * as React from "react";

function IconDeviceMobileCharging({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-charging" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={6} y={3} width={12} height={18} rx={2} /><path d="M11 4h2" /><path d="M12 9.5l-1 2.5h2l-1 2.5" /></svg>;
}

export default IconDeviceMobileCharging;
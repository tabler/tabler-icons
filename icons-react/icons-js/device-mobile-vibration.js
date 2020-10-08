import * as React from "react";

function IconDeviceMobileVibration({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-device-mobile-vibration" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={10} height={16} rx={1} /><line x1={8} y1={5} x2={10} y2={5} /><line x1={9} y1={17} x2={9} y2={17.01} /><path d="M20 6l-2 3l2 3l-2 3l2 3" /></svg>;
}

export default IconDeviceMobileVibration;
import * as React from "react";

function IconDeviceMobileVibration({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-vibration" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/device-mobile-vibration"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={3} width={12} height={18} rx={2} /><line x1={8} y1={4} x2={10} y2={4} /><line x1={9} y1={17} x2={9} y2={17.01} /><path d="M21 6l-2 3l2 3l-2 3l2 3" /></svg>;
}

export default IconDeviceMobileVibration;
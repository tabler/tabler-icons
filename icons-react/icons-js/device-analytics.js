import * as React from "react";

function IconDeviceAnalytics({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-analytics" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={4} width={18} height={12} rx={1} /><line x1={7} y1={20} x2={17} y2={20} /><line x1={9} y1={16} x2={9} y2={20} /><line x1={15} y1={16} x2={15} y2={20} /><path d="M8 12l3 -3l2 2l3 -3" /></svg>;
}

export default IconDeviceAnalytics;
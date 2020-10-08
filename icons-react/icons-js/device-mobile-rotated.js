import * as React from "react";

function IconDeviceMobileRotated({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-device-mobile-rotated" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><g transform="rotate(90 12 12)"><rect x={7} y={4} width={10} height={16} rx={1} /><line x1={11} y1={5} x2={13} y2={5} /><line x1={12} y1={17} x2={12} y2={17.01} /></g></svg>;
}

export default IconDeviceMobileRotated;
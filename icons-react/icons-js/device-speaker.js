import * as React from "react";

function IconDeviceSpeaker({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-speaker" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/device-speaker"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={5} y={3} width={14} height={18} rx={2} /><circle cx={12} cy={14} r={3} /><line x1={12} y1={7} x2={12} y2={7.01} /></svg>;
}

export default IconDeviceSpeaker;
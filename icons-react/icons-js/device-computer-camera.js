import * as React from "react";

function IconDeviceComputerCamera({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-computer-camera" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/device-computer-camera"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={10} r={7} /><circle cx={12} cy={10} r={3} /><path d="M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486" /></svg>;
}

export default IconDeviceComputerCamera;
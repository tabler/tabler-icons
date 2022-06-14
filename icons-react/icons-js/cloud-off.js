import * as React from "react";

function IconCloudOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={3} x2={21} y2={21} /><path d="M18 18h-11c-2.598 0 -4.705 -2.015 -4.705 -4.5s2.107 -4.5 4.705 -4.5c.112 -.5 .305 -.973 .568 -1.408m2.094 -1.948c.329 -.174 .68 -.319 1.05 -.43c1.9 -.576 3.997 -.194 5.5 1c1.503 1.192 2.185 3.017 1.788 4.786h1a3.5 3.5 0 0 1 2.212 6.212" /></svg>;
}

export default IconCloudOff;
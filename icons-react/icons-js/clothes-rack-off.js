import * as React from "react";

function IconClothesRackOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clothes-rack-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={2} /><path d="M12 7v1m0 4v9" /><path d="M9 21h6" /><path d="M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578 -.424a5.999 5.999 0 0 0 1.779 -1.229" /><path d="M3 3l18 18" /></svg>;
}

export default IconClothesRackOff;
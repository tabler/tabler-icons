import * as React from "react";

function IconUsb({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-usb" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={19} r={2} /><path d="M12 17v-11.5" /><path d="M7 10v3l5 3" /><path d="M12 14.5l5 -2v-2.5" /><path d="M16 10h2v-2h-2z" /><circle cx={7} cy={9} r={1} /><path d="M10 5.5h4l-2 -2.5z" /></svg>;
}

export default IconUsb;
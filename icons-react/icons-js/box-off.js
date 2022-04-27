import * as React from "react";

function IconBoxOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/box-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" /><path d="M14.561 10.559l5.439 -3.059" /><path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconBoxOff;
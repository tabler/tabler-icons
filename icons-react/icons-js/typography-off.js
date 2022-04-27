import * as React from "react";

function IconTypographyOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-typography-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/typography-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h3" /><path d="M14 20h6" /><path d="M6.9 15h6.9" /><path d="M13 13l3 7" /><path d="M5 20l4.09 -10.906" /><path d="M10.181 6.183l.819 -2.183h2l3.904 8.924" /><path d="M3 3l18 18" /></svg>;
}

export default IconTypographyOff;
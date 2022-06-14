import * as React from "react";

function IconBracketsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brackets-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5v15h3" /><path d="M16 4h3v11m0 4v1h-3" /><path d="M3 3l18 18" /></svg>;
}

export default IconBracketsOff;
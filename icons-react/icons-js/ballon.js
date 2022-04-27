import * as React from "react";

function IconBallon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ballon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ballon"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8a2 2 0 0 0 -2 -2" /><path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" /><path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" /></svg>;
}

export default IconBallon;
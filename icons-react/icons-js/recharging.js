import * as React from "react";

function IconRecharging({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recharging" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/recharging"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" /><path d="M3.186 10.209a9 9 0 0 0 0 3.508" /><path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" /><path d="M10.209 20.814a9 9 0 0 0 3.5 0" /><path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" /><path d="M20.814 13.791a9 9 0 0 0 0 -3.508" /><path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" /><path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" /><path d="M12 8l-2 4h4l-2 4" /><path d="M12 21a9 9 0 0 0 0 -18" /></svg>;
}

export default IconRecharging;
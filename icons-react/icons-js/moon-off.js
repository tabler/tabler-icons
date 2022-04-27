import * as React from "react";

function IconMoonOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/moon-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7.962 3.949a8.97 8.97 0 0 1 4.038 -.957v.008h.393a7.478 7.478 0 0 0 -2.07 3.308m-.141 3.84c.186 .823 .514 1.626 .989 2.373a7.49 7.49 0 0 0 4.586 3.268m3.893 -.11c.223 -.067 .444 -.144 .663 -.233a9.088 9.088 0 0 1 -.274 .597m-1.695 2.337a9 9 0 0 1 -12.71 -12.749" /><path d="M3 3l18 18" /></svg>;
}

export default IconMoonOff;
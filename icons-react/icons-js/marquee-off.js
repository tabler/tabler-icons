import * as React from "react";

function IconMarqueeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-marquee-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/marquee-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" /><path d="M9 4h1.5" /><path d="M13.5 4h1.5" /><path d="M18 4a2 2 0 0 1 2 2" /><path d="M20 9v1.5" /><path d="M20 13.5v1.5" /><path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" /><path d="M15 20h-1.5" /><path d="M10.5 20h-1.5" /><path d="M6 20a2 2 0 0 1 -2 -2" /><path d="M4 15v-1.5" /><path d="M4 10.5v-1.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconMarqueeOff;
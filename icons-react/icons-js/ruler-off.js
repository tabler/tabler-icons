import * as React from "react";

function IconRulerOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ruler-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/ruler-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a0.997 .997 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722" /><path d="M4 8h2" /><path d="M4 12h3" /><path d="M4 16h2" /><path d="M12 4v3" /><path d="M16 4v2" /><path d="M3 3l18 18" /></svg>;
}

export default IconRulerOff;
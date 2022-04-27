import * as React from "react";

function IconArtboardOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/artboard-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 8h3a1 1 0 0 1 1 1v3" /><path d="M15.716 15.698a0.997 .997 0 0 1 -.716 .302h-6a1 1 0 0 1 -1 -1v-6c0 -.273 .11 -.52 .287 -.7" /><path d="M3 8h1" /><path d="M3 16h1" /><path d="M8 3v1" /><path d="M16 3v1" /><path d="M20 8h1" /><path d="M20 16h1" /><path d="M8 20v1" /><path d="M16 20v1" /><path d="M3 3l18 18" /></svg>;
}

export default IconArtboardOff;
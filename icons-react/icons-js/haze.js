import * as React from "react";

function IconHaze({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-haze" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/haze"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12h1" /><path d="M12 3v1" /><path d="M20 12h1" /><path d="M5.6 5.6l.7 .7" /><path d="M18.4 5.6l-.7 .7" /><path d="M8 12a4 4 0 1 1 8 0" /><path d="M3 16h18" /><path d="M3 20h18" /></svg>;
}

export default IconHaze;
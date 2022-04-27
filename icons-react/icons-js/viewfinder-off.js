import * as React from "react";

function IconViewfinderOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-viewfinder-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/viewfinder-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" /><path d="M12 3v4" /><path d="M12 21v-3" /><path d="M3 12h4" /><path d="M21 12h-3" /><path d="M12 12v.01" /><path d="M3 3l18 18" /></svg>;
}

export default IconViewfinderOff;
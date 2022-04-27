import * as React from "react";

function IconABOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-a-b-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/a-b-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" /><path d="M12 12v6" /><path d="M12 6v2" /><path d="M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82m-3.83 -3.82v-4" /><path d="M3 3l18 18" /></svg>;
}

export default IconABOff;
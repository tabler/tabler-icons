import * as React from "react";

function IconIroningSteamOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ironing-steam-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" /><path d="M16 16h-13a7.001 7.001 0 0 1 6.056 -6.937" /><path d="M13 9h6.8" /><path d="M12 19v2" /><path d="M8 19l-1 2" /><path d="M16 19l1 2" /><path d="M3 3l18 18" /></svg>;
}

export default IconIroningSteamOff;
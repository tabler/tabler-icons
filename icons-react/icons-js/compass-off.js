import * as React from "react";

function IconCompassOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/compass-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.999 9l3.001 -1l-1.002 3.005m-.998 2.995l-6 2l2 -6" /><path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" /><path d="M12 3v2" /><path d="M12 19v2" /><path d="M3 12h2" /><path d="M19 12h2" /><path d="M3 3l18 18" /></svg>;
}

export default IconCompassOff;
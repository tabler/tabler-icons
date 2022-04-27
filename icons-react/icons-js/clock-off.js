import * as React from "react";

function IconClockOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/clock-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 7v1" /><path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" /><path d="M3 3l18 18" /></svg>;
}

export default IconClockOff;
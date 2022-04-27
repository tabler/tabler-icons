import * as React from "react";

function IconDropletOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/droplet-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.454 8.458l-1.653 2.545a6 6 0 0 0 10.32 6.123" /><path d="M18 14a5.971 5.971 0 0 0 -.803 -3l-5.197 -8l-1.968 3.03" /><path d="M3 3l18 18" /></svg>;
}

export default IconDropletOff;
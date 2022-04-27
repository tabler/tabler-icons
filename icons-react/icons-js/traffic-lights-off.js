import * as React from "react";

function IconTrafficLightsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-traffic-lights-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/traffic-lights-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10" /><path d="M12 8a1 1 0 1 0 -1 -1" /><path d="M11.291 11.295a1 1 0 0 0 1.418 1.41" /><circle cx={12} cy={17} r={1} /><path d="M3 3l18 18" /></svg>;
}

export default IconTrafficLightsOff;
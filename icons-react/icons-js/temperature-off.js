import * as React from "react";

function IconTemperatureOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/temperature-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10v3.5a4 4 0 1 0 5.836 2.33m-1.836 -5.83v-5a2 2 0 1 0 -4 0v1" /><path d="M13 9h1" /><path d="M3 3l18 18" /></svg>;
}

export default IconTemperatureOff;
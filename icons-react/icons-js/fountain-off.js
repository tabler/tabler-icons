import * as React from "react";

function IconFountainOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fountain-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/fountain-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 16v-5a2 2 0 1 0 -4 0" /><path d="M15 16v-1m0 -4a2 2 0 1 1 4 0" /><path d="M12 16v-4m0 -4v-2a3 3 0 0 1 6 0" /><path d="M7.451 3.43a3 3 0 0 1 4.549 2.57" /><path d="M20 16h1v1m-.871 3.114a2.99 2.99 0 0 1 -2.129 .886h-12a3 3 0 0 1 -3 -3v-2h13" /><path d="M3 3l18 18" /></svg>;
}

export default IconFountainOff;
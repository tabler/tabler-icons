import * as React from "react";

function IconVolume({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/volume"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>;
}

export default IconVolume;
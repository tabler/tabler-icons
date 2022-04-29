import * as React from "react";

function IconPodium({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-podium" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/podium"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485z" /><path d="M7 8v-2a3 3 0 0 1 3 -3" /><path d="M8 12l1 9" /><path d="M16 12l-1 9" /><path d="M7 21h10" /></svg>;
}

export default IconPodium;
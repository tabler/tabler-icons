import * as React from "react";

function IconPodiumOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-podium-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3" /><path d="M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894" /><path d="M8 12l1 9" /><path d="M15.599 15.613l-.599 5.387" /><path d="M7 21h10" /><path d="M3 3l18 18" /></svg>;
}

export default IconPodiumOff;
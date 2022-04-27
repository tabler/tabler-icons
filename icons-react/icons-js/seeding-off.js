import * as React from "react";

function IconSeedingOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-seeding-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/seeding-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.412 7.407a6.025 6.025 0 0 0 -2.82 -2.82m-4.592 -.587h-1v2a6 6 0 0 0 6 6h3" /><path d="M12 14a6 6 0 0 1 .255 -1.736m1.51 -2.514a5.981 5.981 0 0 1 4.235 -1.75h3v1c0 2.158 -1.14 4.05 -2.85 5.107m-3.15 .893h-3" /><path d="M12 20v-8" /><path d="M3 3l18 18" /></svg>;
}

export default IconSeedingOff;
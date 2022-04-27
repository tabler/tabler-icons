import * as React from "react";

function IconFishOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fish-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/fish-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.69 7.44a6.973 6.973 0 0 0 -1.63 3.635" /><path d="M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583 -1.449c.988 -.788 1.93 -1.836 2.82 -3.153c-3.005 -4.443 -6.596 -5.812 -10.564 -4.548m-2.764 1.266c-2.145 1.266 -4.378 3.215 -6.672 5.786" /><path d="M18 11v.01" /><path d="M11.153 11.169c-.287 .777 -.171 1.554 .347 2.331" /><path d="M3 3l18 18" /></svg>;
}

export default IconFishOff;
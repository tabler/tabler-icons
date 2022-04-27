import * as React from "react";

function IconRollercoaster({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rollercoaster" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/rollercoaster"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675" /><path d="M20 9v12" /><path d="M8 21v-3" /><path d="M12 21v-10" /><path d="M16 9.5v11.5" /><path d="M15 3h5v3h-5z" /><path d="M6 8l4 -3l2 2.5l-4 3l-1.8 -.5z" /></svg>;
}

export default IconRollercoaster;
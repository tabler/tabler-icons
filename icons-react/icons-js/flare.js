import * as React from "react";

function IconFlare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/flare"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={2} /><path d="M3 12h4m5 -9v4m5 5h4m-9 5v4m-4.5 -13.5l1 1m8 -1l-1 1m0 7l1 1m-8 -1l-1 1" /></svg>;
}

export default IconFlare;
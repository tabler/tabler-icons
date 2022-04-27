import * as React from "react";

function IconCloudStorm({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-storm" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cloud-storm"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" /><polyline points="13 14 11 18 14 18 12 22" /></svg>;
}

export default IconCloudStorm;
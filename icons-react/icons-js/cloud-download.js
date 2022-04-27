import * as React from "react";

function IconCloudDownload({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-download" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cloud-download"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1={12} y1={13} x2={12} y2={22} /><polyline points="9 19 12 22 15 19" /></svg>;
}

export default IconCloudDownload;
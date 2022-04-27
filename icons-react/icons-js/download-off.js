import * as React from "react";

function IconDownloadOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/download-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19" /><path d="M7 11l5 5l2.005 -2.005m1.994 -1.994l1.001 -1.001" /><path d="M12 4v4m0 4v4" /><path d="M3 3l18 18" /></svg>;
}

export default IconDownloadOff;
import * as React from "react";

function IconRefreshOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/refresh-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0 -11.271 -6.305m-2.41 1.624a8.083 8.083 0 0 0 -1.819 2.681m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 13.671 4.691m2.329 -1.691v-1h-1" /><path d="M3 3l18 18" /></svg>;
}

export default IconRefreshOff;
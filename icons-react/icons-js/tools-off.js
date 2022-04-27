import * as React from "react";

function IconToolsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/tools-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5m-2.004 2.004l-1.996 1.996l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5m-2 2l-2 2l-5 -5" /><path d="M16 17l-1.5 1.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconToolsOff;
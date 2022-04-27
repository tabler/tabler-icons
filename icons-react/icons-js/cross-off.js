import * as React from "react";

function IconCrossOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cross-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/cross-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" /><path d="M3 3l18 18" /></svg>;
}

export default IconCrossOff;
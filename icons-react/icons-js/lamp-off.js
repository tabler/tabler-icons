import * as React from "react";

function IconLampOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lamp-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/lamp-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 20h6" /><path d="M12 20v-8" /><path d="M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" /><path d="M3 3l18 18" /></svg>;
}

export default IconLampOff;
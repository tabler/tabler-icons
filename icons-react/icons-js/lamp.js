import * as React from "react";

function IconLamp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lamp" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/lamp"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 20h6" /><path d="M12 20v-8" /><path d="M5 12h14l-4 -8h-6z" /></svg>;
}

export default IconLamp;
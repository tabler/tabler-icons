import * as React from "react";

function IconTextDirectionRtl({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-direction-rtl" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/text-direction-rtl"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" /><path d="M14 15v-11" /><path d="M10 15v-11" /><path d="M5 19h14" /><path d="M7 21l-2 -2l2 -2" /></svg>;
}

export default IconTextDirectionRtl;
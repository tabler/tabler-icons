import * as React from "react";

function IconClearFormatting({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clear-formatting" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/clear-formatting"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 15l4 4m0 -4l-4 4" /><path d="M7 6v-1h11v1" /><line x1={7} y1={19} x2={11} y2={19} /><line x1={13} y1={5} x2={9} y2={19} /></svg>;
}

export default IconClearFormatting;
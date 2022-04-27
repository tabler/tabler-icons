import * as React from "react";

function IconLego({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lego" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/lego"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={9.5} y1={11} x2={9.51} y2={11} /><line x1={14.5} y1={11} x2={14.51} y2={11} /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" /></svg>;
}

export default IconLego;
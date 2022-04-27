import * as React from "react";

function IconMagnet({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-magnet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/magnet"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" /><line x1={4} y1={8} x2={9} y2={8} /><line x1={15} y1={8} x2={19} y2={8} /></svg>;
}

export default IconMagnet;
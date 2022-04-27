import * as React from "react";

function IconLayersOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/layers-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.59 4.581c.362 -.359 .86 -.581 1.41 -.581h8a2 2 0 0 1 2 2v8c0 .556 -.227 1.06 -.594 1.422m-3.406 .578h-6a2 2 0 0 1 -2 -2v-6" /><path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /><path d="M3 3l18 18" /></svg>;
}

export default IconLayersOff;
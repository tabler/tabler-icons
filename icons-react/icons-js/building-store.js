import * as React from "react";

function IconBuildingStore({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/building-store"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={21} x2={21} y2={21} /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><line x1={5} y1={21} x2={5} y2={10.85} /><line x1={19} y1={21} x2={19} y2={10.85} /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>;
}

export default IconBuildingStore;
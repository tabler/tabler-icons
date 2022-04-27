import * as React from "react";

function IconGasStation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gas-station" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/gas-station"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" /><path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" /><line x1={3} y1={20} x2={15} y2={20} /><path d="M18 7v1a1 1 0 0 0 1 1h1" /><line x1={4} y1={11} x2={14} y2={11} /></svg>;
}

export default IconGasStation;
import * as React from "react";

function IconPlaneArrival({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-arrival" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/plane-arrival"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(15 12 12) translate(0 -1)" /><line x1={3} y1={21} x2={21} y2={21} /></svg>;
}

export default IconPlaneArrival;
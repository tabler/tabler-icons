import * as React from "react";

function IconMap2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/map-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={18} y1={6} x2={18} y2={6.01} /><path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" /><polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" /><line x1={9} y1={4} x2={9} y2={17} /><line x1={15} y1={15} x2={15} y2={20} /></svg>;
}

export default IconMap2;
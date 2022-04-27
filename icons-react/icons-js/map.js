import * as React from "react";

function IconMap({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/map"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" /><line x1={9} y1={4} x2={9} y2={17} /><line x1={15} y1={7} x2={15} y2={20} /></svg>;
}

export default IconMap;
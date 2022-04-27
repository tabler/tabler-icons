import * as React from "react";

function IconScale({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scale" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/scale"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={7} y1={20} x2={17} y2={20} /><path d="M6 6l6 -1l6 1" /><line x1={12} y1={3} x2={12} y2={20} /><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></svg>;
}

export default IconScale;
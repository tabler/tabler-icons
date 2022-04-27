import * as React from "react";

function IconHanger2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hanger-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/hanger-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9l-7.971 4.428a2 2 0 0 0 -1.029 1.749v.823a2 2 0 0 0 2 2h1" /><path d="M18 18h1a2 2 0 0 0 2 -2v-.823a2 2 0 0 0 -1.029 -1.749l-7.971 -4.428c-1.457 -.81 -1.993 -2.333 -1.996 -4a2 2 0 1 1 4 0" /><rect x={6} y={16} width={12} height={5} rx={2} /></svg>;
}

export default IconHanger2;
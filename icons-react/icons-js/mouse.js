import * as React from "react";

function IconMouse({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mouse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/mouse"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={6} y={3} width={12} height={18} rx={4} /><line x1={12} y1={7} x2={12} y2={11} /></svg>;
}

export default IconMouse;
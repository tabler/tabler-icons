import * as React from "react";

function IconKeyboard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-keyboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/keyboard"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={2} y={6} width={20} height={12} rx={2} /><line x1={6} y1={10} x2={6} y2={10} /><line x1={10} y1={10} x2={10} y2={10} /><line x1={14} y1={10} x2={14} y2={10} /><line x1={18} y1={10} x2={18} y2={10} /><line x1={6} y1={14} x2={6} y2={14.01} /><line x1={18} y1={14} x2={18} y2={14.01} /><line x1={10} y1={14} x2={14} y2={14} /></svg>;
}

export default IconKeyboard;
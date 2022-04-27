import * as React from "react";

function IconArtboard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/artboard"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={8} y={8} width={8} height={8} rx={1} /><line x1={3} y1={8} x2={4} y2={8} /><line x1={3} y1={16} x2={4} y2={16} /><line x1={8} y1={3} x2={8} y2={4} /><line x1={16} y1={3} x2={16} y2={4} /><line x1={20} y1={8} x2={21} y2={8} /><line x1={20} y1={16} x2={21} y2={16} /><line x1={8} y1={20} x2={8} y2={21} /><line x1={16} y1={20} x2={16} y2={21} /></svg>;
}

export default IconArtboard;
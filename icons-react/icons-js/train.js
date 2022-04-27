import * as React from "react";

function IconTrain({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-train" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/train"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" /><path d="M3 15h16a2 2 0 0 0 2 -2" /><path d="M3 6v5h17.5" /><line x1={3} y1={10} x2={3} y2={14} /><line x1={8} y1={11} x2={8} y2={6} /><line x1={13} y1={11} x2={13} y2={6.5} /><line x1={3} y1={19} x2={21} y2={19} /></svg>;
}

export default IconTrain;
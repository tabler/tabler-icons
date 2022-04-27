import * as React from "react";

function IconBuildingBank({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-bank" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/building-bank"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={21} x2={21} y2={21} /><line x1={3} y1={10} x2={21} y2={10} /><polyline points="5 6 12 3 19 6" /><line x1={4} y1={10} x2={4} y2={21} /><line x1={20} y1={10} x2={20} y2={21} /><line x1={8} y1={14} x2={8} y2={17} /><line x1={12} y1={14} x2={12} y2={17} /><line x1={16} y1={14} x2={16} y2={17} /></svg>;
}

export default IconBuildingBank;
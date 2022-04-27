import * as React from "react";

function IconBug({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bug" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/bug"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 9v-1a3 3 0 0 1 6 0v1" /><path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" /><line x1={3} y1={13} x2={7} y2={13} /><line x1={17} y1={13} x2={21} y2={13} /><line x1={12} y1={20} x2={12} y2={14} /><line x1={4} y1={19} x2={7.35} y2={17} /><line x1={20} y1={19} x2={16.65} y2={17} /><line x1={4} y1={7} x2={7.75} y2={9.4} /><line x1={20} y1={7} x2={16.25} y2={9.4} /></svg>;
}

export default IconBug;
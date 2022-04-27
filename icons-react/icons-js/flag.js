import * as React from "react";

function IconFlag({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/flag"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={5} y1={5} x2={5} y2={21} /><line x1={19} y1={5} x2={19} y2={14} /><path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" /><path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" /></svg>;
}

export default IconFlag;
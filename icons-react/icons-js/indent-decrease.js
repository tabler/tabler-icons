import * as React from "react";

function IconIndentDecrease({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-indent-decrease" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/indent-decrease"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={20} y1={6} x2={13} y2={6} /><line x1={20} y1={12} x2={11} y2={12} /><line x1={20} y1={18} x2={13} y2={18} /><path d="M8 8l-4 4l4 4" /></svg>;
}

export default IconIndentDecrease;
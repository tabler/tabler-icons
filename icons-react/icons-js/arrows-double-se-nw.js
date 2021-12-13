import * as React from "react";

function IconArrowsDoubleSeNw({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-double-se-nw" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={10} x2={14} y2={21} /><path d="M14 17v4h-4" /><path d="M14 3h-4v4" /><path d="M21 14l-11 -11" /></svg>;
}

export default IconArrowsDoubleSeNw;
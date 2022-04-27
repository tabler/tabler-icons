import * as React from "react";

function IconZoomQuestion({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-question" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/zoom-question"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={10} r={7} /><path d="M21 21l-6 -6" /><line x1={10} y1={13} x2={10} y2={13.01} /><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" /></svg>;
}

export default IconZoomQuestion;
import * as React from "react";

function IconArrowsRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrows-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={21} y1={17} x2={3} y2={17} /><path d="M18 4l3 3l-3 3" /><path d="M18 20l3 -3l-3 -3" /><line x1={21} y1={7} x2={3} y2={7} /></svg>;
}

export default IconArrowsRight;
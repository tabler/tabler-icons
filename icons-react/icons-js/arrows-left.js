import * as React from "react";

function IconArrowsLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrows-left"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={7} x2={21} y2={7} /><path d="M6 20l-3 -3l3 -3" /><path d="M6 4l-3 3l3 3" /><line x1={3} y1={17} x2={21} y2={17} /></svg>;
}

export default IconArrowsLeft;
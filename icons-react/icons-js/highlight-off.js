import * as React from "react";

function IconHighlightOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-highlight-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/highlight-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.998 9.002l-5.998 5.998v4h4l6 -6m1.997 -1.997l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497" /><path d="M12.5 5.5l4 4" /><path d="M4.5 13.5l4 4" /><path d="M19 15h2v2m-2 2h-6l3.004 -3.004" /><path d="M3 3l18 18" /></svg>;
}

export default IconHighlightOff;
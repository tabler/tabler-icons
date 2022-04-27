import * as React from "react";

function IconArrowLoopRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-loop-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-loop-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21v-13a4 4 0 1 0 -4 4h13" /><path d="M17 16l4 -4l-4 -4" /></svg>;
}

export default IconArrowLoopRight;
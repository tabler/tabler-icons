import * as React from "react";

function IconArrowForwardUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-forward-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-forward-up"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" /></svg>;
}

export default IconArrowForwardUp;
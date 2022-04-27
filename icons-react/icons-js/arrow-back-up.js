import * as React from "react";

function IconArrowBackUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-back-up"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /></svg>;
}

export default IconArrowBackUp;
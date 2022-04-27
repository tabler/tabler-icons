import * as React from "react";

function IconLetterV({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-v" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/letter-v"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4l6 16l6 -16" /></svg>;
}

export default IconLetterV;
import * as React from "react";

function IconBrackets({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brackets" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brackets"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4h-3v16h3" /><path d="M16 4h3v16h-3" /></svg>;
}

export default IconBrackets;
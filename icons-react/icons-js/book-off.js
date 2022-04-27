import * as React from "react";

function IconBookOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/book-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 19a9 9 0 0 1 9 0a8.999 8.999 0 0 1 5.899 -1.096" /><path d="M3 6a8.995 8.995 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" /><path d="M3 6v13" /><path d="M12 6v2m0 4v7" /><path d="M21 6v11" /><path d="M3 3l18 18" /></svg>;
}

export default IconBookOff;
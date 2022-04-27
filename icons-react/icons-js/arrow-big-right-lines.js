import * as React from "react";

function IconArrowBigRightLines({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-lines" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-big-right-lines"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" /><path d="M3 9v6" /><path d="M6 9v6" /></svg>;
}

export default IconArrowBigRightLines;
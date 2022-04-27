import * as React from "react";

function IconArrowAutofitContent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-content" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-autofit-content"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4l-3 3l3 3" /><path d="M18 4l3 3l-3 3" /><rect x={4} y={14} width={16} height={6} rx={2} /><path d="M10 7h-7" /><path d="M21 7h-7" /></svg>;
}

export default IconArrowAutofitContent;
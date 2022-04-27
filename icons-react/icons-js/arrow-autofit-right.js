import * as React from "react";

function IconArrowAutofitRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-autofit-right"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" /><path d="M4 18h17" /><path d="M18 15l3 3l-3 3" /></svg>;
}

export default IconArrowAutofitRight;
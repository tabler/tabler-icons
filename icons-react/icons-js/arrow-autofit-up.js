import * as React from "react";

function IconArrowAutofitUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-autofit-up"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" /><path d="M18 20v-17" /><path d="M15 6l3 -3l3 3" /></svg>;
}

export default IconArrowAutofitUp;
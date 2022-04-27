import * as React from "react";

function IconCalculatorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calculator-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/calculator-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11" /><path d="M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1" /><path d="M8 14v.01" /><path d="M12 14v.01" /><path d="M8 17v.01" /><path d="M12 17v.01" /><path d="M16 17v.01" /><path d="M3 3l18 18" /></svg>;
}

export default IconCalculatorOff;
import * as React from "react";

function IconGolfOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-golf-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/golf-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18v-6m0 -4v-5l7 4l-5.07 2.897" /><path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" /><path d="M3 3l18 18" /></svg>;
}

export default IconGolfOff;
import * as React from "react";

function IconFlameOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flame-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/flame-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.973 8.974c-.335 .378 -.67 .716 -.973 1.026c-1.226 1.26 -2 3.24 -2 5a6 6 0 0 0 11.472 2.466m.383 -3.597c-.32 -1.409 -1.122 -3.045 -1.855 -3.869c-.281 .472 -.543 .87 -.79 1.202m-2.358 -2.35c-.068 -2.157 -1.182 -4.184 -1.852 -4.852c0 .968 -.18 1.801 -.465 2.527" /><path d="M3 3l18 18" /></svg>;
}

export default IconFlameOff;
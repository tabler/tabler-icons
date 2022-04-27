import * as React from "react";

function IconLeafOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-leaf-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/leaf-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21c.474 -4.264 2.294 -7.63 6.313 -9.673" /><path d="M6.622 6.62c-1.877 1.625 -2.629 3.877 -2.636 6.38c0 1 0 3 2 5h3.014c2.73 0 5.086 -.633 6.913 -2.081m1.901 -2.098c1.227 -1.871 1.992 -4.437 2.186 -7.821v-2h-4.014c-2.863 0 -5.117 .405 -6.86 1.118" /><path d="M3 3l18 18" /></svg>;
}

export default IconLeafOff;
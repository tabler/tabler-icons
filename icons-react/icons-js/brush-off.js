import * as React from "react";

function IconBrushOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brush-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17a4 4 0 1 1 4 4h-4v-4z" /><path d="M21 3a15.996 15.996 0 0 0 -9.309 4.704m-1.795 2.212a15.993 15.993 0 0 0 -1.696 3.284" /><path d="M21 3a15.996 15.996 0 0 1 -4.697 9.302m-2.195 1.786a15.993 15.993 0 0 1 -3.308 1.712" /><path d="M3 3l18 18" /></svg>;
}

export default IconBrushOff;
import * as React from "react";

function IconVectorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/vector-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.68 6.733a0.996 .996 0 0 1 -.68 .267h-2a1 1 0 0 1 -1 -1v-2c0 -.276 .112 -.527 .293 -.708" /><rect x={17} y={3} width={4} height={4} rx={1} /><path d="M20.72 20.693a0.997 .997 0 0 1 -.72 .307h-2a1 1 0 0 1 -1 -1v-2c0 -.282 .116 -.536 .304 -.718" /><rect x={3} y={17} width={4} height={4} rx={1} /><path d="M5 7v10" /><path d="M19 7v8" /><path d="M9 5h8" /><path d="M7 19h10" /><path d="M3 3l18 18" /></svg>;
}

export default IconVectorOff;
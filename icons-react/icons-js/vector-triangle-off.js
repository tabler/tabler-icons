import * as React from "react";

function IconVectorTriangleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-triangle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/vector-triangle-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 6v-1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1" /><rect x={3} y={17} width={4} height={4} rx={1} /><path d="M20.705 20.709a0.997 .997 0 0 1 -.705 .291h-2a1 1 0 0 1 -1 -1v-2c0 -.28 .115 -.532 .3 -.714" /><path d="M6.5 17.1l3.749 -6.823" /><path d="M13.158 9.197l-.658 -1.197" /><path d="M7 19h10" /><path d="M3 3l18 18" /></svg>;
}

export default IconVectorTriangleOff;
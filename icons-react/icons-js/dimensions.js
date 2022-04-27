import * as React from "react";

function IconDimensions({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dimensions" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/dimensions"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5h11" /><path d="M12 7l2 -2l-2 -2" /><path d="M5 3l-2 2l2 2" /><path d="M19 10v11" /><path d="M17 19l2 2l2 -2" /><path d="M21 12l-2 -2l-2 2" /><rect x={3} y={10} width={11} height={11} rx={2} /></svg>;
}

export default IconDimensions;
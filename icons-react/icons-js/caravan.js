import * as React from "react";

function IconCaravan({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caravan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/caravan"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={11} cy={17} r={2} /><line x1={21} y1={17} x2={13} y2={17} /><path d="M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8" /><rect x={6} y={8} width={6} height={4} rx={1} /></svg>;
}

export default IconCaravan;
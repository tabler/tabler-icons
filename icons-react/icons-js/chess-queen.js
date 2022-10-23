import * as React from "react";

function IconChessQueen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chess-queen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" /><path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" /><circle cx={12} cy={4} r={1} /><circle cx={6} cy={5} r={1} /><circle cx={18} cy={5} r={1} /></svg>;
}

export default IconChessQueen;
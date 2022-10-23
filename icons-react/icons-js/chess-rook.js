import * as React from "react";

function IconChessRook({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chess-rook" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" /><path d="M8 16l1 -9h6l1 9" /><path d="M6 4l.5 3h11l.5 -3" /><path d="M10 4v3" /><path d="M14 4v3" /></svg>;
}

export default IconChessRook;
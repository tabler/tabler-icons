import * as React from "react";

function IconChess({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chess" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a3 3 0 0 1 3 3c0 1.113 -.6 2.482 -1.5 3l1.5 7h-6l1.5 -7c-.9 -.518 -1.5 -1.887 -1.5 -3a3 3 0 0 1 3 -3z" /><path d="M8 9h8" /><path d="M6.684 16.772a1 1 0 0 0 -.684 .949v1.279a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1.28a1 1 0 0 0 -.684 -.948l-2.316 -.772h-6l-2.316 .772z" /></svg>;
}

export default IconChess;
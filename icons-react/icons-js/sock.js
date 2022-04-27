import * as React from "react";

function IconSock({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sock" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/sock"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 3v6l4.798 5.142a4 4 0 0 1 -5.441 5.86l-6.736 -6.41a2 2 0 0 1 -.621 -1.451v-9.141h8z" /><path d="M7.895 15.768c.708 -.721 1.105 -1.677 1.105 -2.768a4 4 0 0 0 -4 -4" /></svg>;
}

export default IconSock;
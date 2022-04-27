import * as React from "react";

function IconDiamonds({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-diamonds" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/diamonds"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3.005l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3.005l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0z" /></svg>;
}

export default IconDiamonds;
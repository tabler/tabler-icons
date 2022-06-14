import * as React from "react";

function IconBeer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-beer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 20h6v-4.111a8 8 0 0 1 .845 -3.578l.31 -.622a8 8 0 0 0 .845 -3.578v-4.111h-10v4.111a8 8 0 0 0 .845 3.578l.31 .622a8 8 0 0 1 .845 3.578v4.111z" /><path d="M7 8h10" /></svg>;
}

export default IconBeer;
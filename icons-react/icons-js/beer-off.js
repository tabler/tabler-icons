import * as React from "react";

function IconBeerOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-beer-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/beer-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7v1.111c0 1.242 .29 2.467 .845 3.578l.31 .622a8 8 0 0 1 .845 3.578v4.111h6v-4.111a8 8 0 0 1 .045 -.85m.953 -3.035l.157 -.315a7.999 7.999 0 0 0 .845 -3.578v-4.111h-9" /><path d="M7 8h1m4 0h5" /><path d="M3 3l18 18" /></svg>;
}

export default IconBeerOff;
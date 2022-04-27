import * as React from "react";

function IconFlaskOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flask-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/flask-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3h6" /><path d="M13 9h1" /><path d="M10 3v3m-.268 3.736l-3.732 10.264a0.7 .7 0 0 0 .5 1h11a0.7 .7 0 0 0 .5 -1l-1.143 -3.142m-2.288 -6.294l-.569 -1.564v-6" /><path d="M3 3l18 18" /></svg>;
}

export default IconFlaskOff;
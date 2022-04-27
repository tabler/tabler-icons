import * as React from "react";

function IconNewsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/news-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 6h3a1 1 0 0 1 1 1v9m-.606 3.435a2 2 0 0 1 -3.394 -1.435v-2m0 -4v-7a1 1 0 0 0 -1 -1h-7m-3.735 .321a0.996 .996 0 0 0 -.265 .679v12a3 3 0 0 0 3 3h11" /><path d="M8 12h4" /><path d="M8 16h4" /><path d="M3 3l18 18" /></svg>;
}

export default IconNewsOff;
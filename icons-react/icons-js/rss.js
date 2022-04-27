import * as React from "react";

function IconRss({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rss" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/rss"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={19} r={1} /><path d="M4 4a16 16 0 0 1 16 16" /><path d="M4 11a9 9 0 0 1 9 9" /></svg>;
}

export default IconRss;
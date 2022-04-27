import * as React from "react";

function IconBrandBing({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-bing"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 3l4 1.5v12l6 -2.5l-2 -1l-1 -4l7 2.5v4.5l-10 5l-4 -2z" /></svg>;
}

export default IconBrandBing;
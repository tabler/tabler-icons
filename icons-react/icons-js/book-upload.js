import * as React from "react";

function IconBookUpload({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-upload" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/book-upload"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" /><path d="M11 16h-5a2 2 0 0 0 -2 2" /><path d="M15 16l3 -3l3 3" /><path d="M18 13v9" /></svg>;
}

export default IconBookUpload;
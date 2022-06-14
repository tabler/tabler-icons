import * as React from "react";

function IconSticker({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sticker" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" /><path d="M20 12a8 8 0 1 1 -8 -8" /></svg>;
}

export default IconSticker;
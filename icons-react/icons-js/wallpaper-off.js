import * as React from "react";

function IconWallpaperOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallpaper-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/wallpaper-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409a1.994 1.994 0 0 1 -1.42 .591h-12" /><circle cx={6} cy={18} r={2} /><path d="M8 18v-10m-3.427 -3.402c-.353 .362 -.573 .856 -.573 1.402v12" /><path d="M3 3l18 18" /></svg>;
}

export default IconWallpaperOff;
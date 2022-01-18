import * as React from "react";

function IconPlaylistX({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 8h-14" /><path d="M5 12h7" /><path d="M12 16h-7" /><path d="M16 14l4 4" /><path d="M20 14l-4 4" /></svg>;
}

export default IconPlaylistX;
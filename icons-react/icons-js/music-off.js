import * as React from "react";

function IconMusicOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/music-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={17} r={3} /><path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" /><path d="M9 17v-8m0 -4v-1h10v11" /><path d="M12 8h7" /><path d="M3 3l18 18" /></svg>;
}

export default IconMusicOff;
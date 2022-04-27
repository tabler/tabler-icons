import * as React from "react";

function IconZodiacVirgo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-virgo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/zodiac-virgo"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4a2 2 0 0 1 2 2v9" /><path d="M5 6a2 2 0 0 1 4 0v9" /><path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" /><path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" /></svg>;
}

export default IconZodiacVirgo;
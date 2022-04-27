import * as React from "react";

function IconZodiacGemini({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-gemini" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/zodiac-gemini"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3a21 21 0 0 0 18 0" /><path d="M3 21a21 21 0 0 1 18 0" /><line x1={7} y1={4.5} x2={7} y2={19.5} /><line x1={17} y1={4.5} x2={17} y2={19.5} /></svg>;
}

export default IconZodiacGemini;
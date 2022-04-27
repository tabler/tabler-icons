import * as React from "react";

function IconLanguageKatakana({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-language-katakana" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/language-katakana"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" /><path d="M8 8c0 1.5 .5 3 -2 5" /><path d="M12 20l4 -9l4 9" /><path d="M19.1 18h-6.2" /></svg>;
}

export default IconLanguageKatakana;
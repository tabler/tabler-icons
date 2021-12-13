import * as React from "react";

function IconLanguageHiragana({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-language-hiragana" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5h7" /><path d="M7 4c0 4.846 0 7 .5 8" /><path d="M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143" /><path d="M12 20l4 -9l4 9" /><path d="M19.1 18h-6.2" /></svg>;
}

export default IconLanguageHiragana;
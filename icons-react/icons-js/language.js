import * as React from "react";

function IconLanguage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-language" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" /><path d="M11 19l4 -9l4 9m-.9 -2h-6.2" /></svg>;
}

export default IconLanguage;
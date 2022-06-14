import * as React from "react";

function IconLetterK({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-k" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={7} y1={4} x2={7} y2={20} /><path d="M7 12h2l8 -8" /><line x1={9} y1={12} x2={17} y2={20} /></svg>;
}

export default IconLetterK;
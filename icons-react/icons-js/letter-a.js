import * as React from "react";

function IconLetterA({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-a" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" /><line x1={7} y1={13} x2={17} y2={13} /></svg>;
}

export default IconLetterA;
import * as React from "react";

function IconSmokingNo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-smoking-no" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={8} y1={13} x2={8} y2={17} /><path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" /><line x1={3} y1={3} x2={21} y2={21} /><path d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" /></svg>;
}

export default IconSmokingNo;
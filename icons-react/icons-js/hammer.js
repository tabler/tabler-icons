import * as React from "react";

function IconHammer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hammer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" /><path d="M6.293 15.293l-2.586 -2.586a1 1 0 0 1 0 -1.414l7.586 -7.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-7.586 7.586a1 1 0 0 1 -1.414 0z" /></svg>;
}

export default IconHammer;
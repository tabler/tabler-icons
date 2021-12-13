import * as React from "react";

function IconMessageCircleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={3} x2={21} y2={21} /><path d="M8.585 4.581c3.225 -1.181 7.032 -.616 9.66 1.626c2.983 2.543 3.602 6.525 1.634 9.662m-1.908 2.108c-2.786 2.19 -6.89 2.665 -10.271 1.023l-4.7 1l1.3 -3.9c-2.237 -3.308 -1.489 -7.54 1.714 -10.084" /></svg>;
}

export default IconMessageCircleOff;
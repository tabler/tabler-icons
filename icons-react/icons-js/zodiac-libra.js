import * as React from "react";

function IconZodiacLibra({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-libra" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={5} y1={20} x2={19} y2={20} /><path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" /></svg>;
}

export default IconZodiacLibra;
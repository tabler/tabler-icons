import * as React from "react";

function IconGenderThird({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-third" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z" /><path d="M11 12h-3" /><path d="M8 12l-5 -4v8z" /></svg>;
}

export default IconGenderThird;
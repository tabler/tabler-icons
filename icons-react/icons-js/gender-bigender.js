import * as React from "react";

function IconGenderBigender({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-bigender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/gender-bigender"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={11} cy={11} r={4} /><path d="M19 3l-5 5" /><path d="M15 3h4v4" /><path d="M11 16v6" /><path d="M8 19h6" /></svg>;
}

export default IconGenderBigender;
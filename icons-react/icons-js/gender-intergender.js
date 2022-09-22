import * as React from "react";

function IconGenderIntergender({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-intergender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.5 11.5l6.5 6.5v-4" /><path d="M11.5 13.5l6.5 6.5" /><path d="M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" /><path d="M14 20l2 -2" /></svg>;
}

export default IconGenderIntergender;
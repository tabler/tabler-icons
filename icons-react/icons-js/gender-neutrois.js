import * as React from "react";

function IconGenderNeutrois({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-neutrois" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/gender-neutrois"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle transform="matrix(1 0 0 -1 0 30)" cx={12} cy={15} r={5} /><path d="M12 10v-7" /></svg>;
}

export default IconGenderNeutrois;
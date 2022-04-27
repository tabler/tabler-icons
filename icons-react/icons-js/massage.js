import * as React from "react";

function IconMassage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-massage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/massage"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={4} cy={17} r={1} /><circle cx={9} cy={5} r={1} /><path d="M4 22l4 -2v-3h12" /><path d="M11 20h9" /><path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" /></svg>;
}

export default IconMassage;
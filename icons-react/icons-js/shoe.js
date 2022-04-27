import * as React from "react";

function IconShoe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shoe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/shoe"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" /><path d="M14 13l1 -2" /><path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" /><path d="M10 12l1.5 -3" /></svg>;
}

export default IconShoe;
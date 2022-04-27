import * as React from "react";

function IconDna2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dna-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/dna-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2.005 .008 -.014c-3.328 1.99 -4.997 4.662 -5.008 8.014v1" /><path d="M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2.005 .008 .014c-3.328 -1.991 -4.997 -4.662 -5.008 -8.014v-1" /><path d="M7 4h10" /><path d="M7 20h10" /><path d="M8 8h8" /><path d="M8 16h8" /></svg>;
}

export default IconDna2;
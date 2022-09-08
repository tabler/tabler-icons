import * as React from "react";

function IconChefHatOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chef-hat-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.72 4.712a3.999 3.999 0 0 1 7.19 1.439a4 4 0 0 1 2.09 7.723v.126m0 4v3h-12v-7.126a4.002 4.002 0 0 1 .081 -7.796" /><path d="M6.161 17.009l10.839 -.009" /><path d="M3 3l18 18" /></svg>;
}

export default IconChefHatOff;
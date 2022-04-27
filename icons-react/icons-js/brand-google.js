import * as React from "react";

function IconBrandGoogle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-google"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" /></svg>;
}

export default IconBrandGoogle;
import * as React from "react";

function IconBrandFramer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-framer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-framer"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" /></svg>;
}

export default IconBrandFramer;
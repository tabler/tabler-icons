import * as React from "react";

function IconBrandVue({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vue" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-vue"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.5 5l-6.5 10l-6.5 -10" /><path d="M15 5l-3 4.5l-3 -4.5h-7l10 16l10 -16z" /></svg>;
}

export default IconBrandVue;
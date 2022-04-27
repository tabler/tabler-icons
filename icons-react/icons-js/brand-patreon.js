import * as React from "react";

function IconBrandPatreon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-patreon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-patreon"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3h3v18h-3z" /><circle cx={15} cy={9.5} r={6.5} /></svg>;
}

export default IconBrandPatreon;
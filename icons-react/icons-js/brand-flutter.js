import * as React from "react";

function IconBrandFlutter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-flutter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 14l-3 -3l8 -8h6z" /><path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" /></svg>;
}

export default IconBrandFlutter;
import * as React from "react";

function IconBrandZapier({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-zapier" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12h6" /><path d="M21 12h-6" /><path d="M12 3v6" /><path d="M12 15v6" /><path d="M5.636 5.636l4.243 4.243" /><path d="M18.364 18.364l-4.243 -4.243" /><path d="M18.364 5.636l-4.243 4.243" /><path d="M9.879 14.121l-4.243 4.243" /></svg>;
}

export default IconBrandZapier;
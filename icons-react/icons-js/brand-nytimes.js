import * as React from "react";

function IconBrandNytimes({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-nytimes" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.036 5.058a8.001 8.001 0 1 0 8.706 9.965" /><path d="M12 21v-11l-7.5 4" /><path d="M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" /><path d="M9 12v8" /><path d="M16 13h-.01" /></svg>;
}

export default IconBrandNytimes;
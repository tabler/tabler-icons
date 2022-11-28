import * as React from "react";

function IconBrandBandlab({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bandlab" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.885 7l-2.536 4.907c-2.021 3.845 -2.499 8.775 3.821 9.093h6.808c4.86 -.207 7.989 -2.975 4.607 -9.093l-2.988 -4.907" /><path d="M15.078 4h-5.136l3.678 8.768c.547 1.14 .847 1.822 .162 2.676c-.053 .093 -1.332 1.907 -3.053 1.495c-.825 -.187 -1.384 -.926 -1.32 -1.74c.04 -.91 .62 -1.717 1.488 -2.074a4.463 4.463 0 0 1 2.723 -.358" /></svg>;
}

export default IconBrandBandlab;
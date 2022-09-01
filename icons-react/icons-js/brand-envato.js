import * as React from "react";

function IconBrandEnvato({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-envato" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.711 17.875c-.534 -1.339 -1.35 -4.178 .129 -6.47c1.415 -2.193 3.769 -3.608 5.099 -4.278l-5.229 10.748z" /><path d="M19.715 12.508c-.54 3.409 -2.094 6.156 -4.155 7.348c-4.069 2.353 -8.144 .45 -9.297 -.188c.877 -1.436 4.433 -7.22 6.882 -10.591c2.714 -3.737 5.864 -5.978 6.565 -6.077c.001 .201 .03 .55 .071 1.03c.144 1.709 .443 5.264 -.066 8.478z" /></svg>;
}

export default IconBrandEnvato;
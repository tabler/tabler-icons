import * as React from "react";

function IconBrandOpenvpn({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-openvpn" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.618 20.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603" /><circle cx={12} cy={12} r={9} /></svg>;
}

export default IconBrandOpenvpn;
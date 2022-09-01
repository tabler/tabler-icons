import * as React from "react";

function IconBrandOkRu({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-ok-ru" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={9} r={2} /><path d="M20 12c0 8 0 8 -8 8s-8 0 -8 -8s0 -8 8 -8s8 0 8 8z" /><path d="M9.5 13c1.333 .667 3.667 .667 5 0" /><path d="M9.5 17l2.5 -3l2.5 3" /><path d="M12 13.5v.5" /></svg>;
}

export default IconBrandOkRu;
import * as React from "react";

function IconBrandAlgolia({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-algolia" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M11.5 7h1" /><path d="M7.403 9.11l.707 -.706" /><circle cx={12} cy={13} r={3.5} /><path d="M12 12v1l.9 -.5z" /></svg>;
}

export default IconBrandAlgolia;
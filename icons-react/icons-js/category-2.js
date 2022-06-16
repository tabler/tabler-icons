import * as React from "react";

function IconCategory2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><circle cx={17} cy={17} r={3} /><circle cx={7} cy={7} r={3} /></svg>;
}

export default IconCategory2;
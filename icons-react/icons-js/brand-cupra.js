import * as React from "react";

function IconBrandCupra({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-cupra" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.5 10l-2.5 -4l15.298 6.909a0.2 .2 0 0 1 .09 .283l-3.388 5.808" /><path d="M10 19l-3.388 -5.808a0.2 .2 0 0 1 .09 -.283l15.298 -6.909l-2.5 4" /></svg>;
}

export default IconBrandCupra;
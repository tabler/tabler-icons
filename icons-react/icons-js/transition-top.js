import * as React from "react";

function IconTransitionTop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transition-top" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" /><path d="M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z" /><path d="M12 15v-8" /><path d="M9 10l3 -3l3 3" /></svg>;
}

export default IconTransitionTop;
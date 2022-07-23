import * as React from "react";

function IconHorseToy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-horse-toy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" /><path d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" /><path d="M5 18.5l2 -9.5" /><path d="M8 20l2 -5h4l2 5" /></svg>;
}

export default IconHorseToy;
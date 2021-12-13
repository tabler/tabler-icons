import * as React from "react";

function IconArrowsUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={17} y1={3} x2={17} y2={21} /><path d="M4 6l3 -3l3 3" /><path d="M20 6l-3 -3l-3 3" /><line x1={7} y1={3} x2={7} y2={21} /></svg>;
}

export default IconArrowsUp;
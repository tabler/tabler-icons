import * as React from "react";

function IconArrowMoveRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-move-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 12h10" /><path d="M18 9l3 3l-3 3" /><path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /></svg>;
}

export default IconArrowMoveRight;
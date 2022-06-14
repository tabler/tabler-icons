import * as React from "react";

function IconSquareHalf({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-half" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4v16" /><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M12 13l7.5 -7.5" /><path d="M12 18l8 -8" /><path d="M15 20l5 -5" /><path d="M12 8l4 -4" /></svg>;
}

export default IconSquareHalf;
import * as React from "react";

function IconCircleChevronsUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-chevrons-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l3 -3l3 3" /><path d="M9 11l3 -3l3 3" /><path d="M12 21a9 9 0 1 0 -.265 -.004l.265 .004z" /></svg>;
}

export default IconCircleChevronsUp;
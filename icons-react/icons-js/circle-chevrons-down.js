import * as React from "react";

function IconCircleChevronsDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-chevrons-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 9l-3 3l-3 -3" /><path d="M15 13l-3 3l-3 -3" /><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" /></svg>;
}

export default IconCircleChevronsDown;
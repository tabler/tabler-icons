import * as React from "react";

function IconTorii({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-torii" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4c5.333 1.333 10.667 1.333 16 0" /><path d="M4 8h16" /><path d="M12 5v3" /><path d="M18 4.5v15.5" /><path d="M6 4.5v15.5" /></svg>;
}

export default IconTorii;
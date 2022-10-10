import * as React from "react";

function IconTicTac({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tic-tac" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={6} r={2} /><path d="M3 12h18" /><path d="M12 3v18" /><path d="M4 16l4 4" /><path d="M4 20l4 -4" /><path d="M16 4l4 4" /><path d="M16 8l4 -4" /><circle cx={18} cy={18} r={2} /></svg>;
}

export default IconTicTac;
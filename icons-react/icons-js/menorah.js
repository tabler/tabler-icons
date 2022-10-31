import * as React from "react";

function IconMenorah({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menorah" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4v16" /><path d="M8 4v2a4 4 0 1 0 8 0v-2" /><path d="M4 4v2a8 8 0 1 0 16 0v-2" /><path d="M10 20h4" /></svg>;
}

export default IconMenorah;
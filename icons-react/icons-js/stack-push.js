import * as React from "react";

function IconStackPush({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-push" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 10l-2 1l8 4l8 -4l-2 -1" /><path d="M4 15l8 4l8 -4" /><path d="M12 4v7" /><path d="M15 8l-3 3l-3 -3" /></svg>;
}

export default IconStackPush;
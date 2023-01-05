import * as React from "react";

function IconPlaceholder({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-placeholder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" /><path d="M13 8l-3 -3l3 -3" /><path d="M7 17l4 -4l-4 -4l-4 4z" /></svg>;
}

export default IconPlaceholder;
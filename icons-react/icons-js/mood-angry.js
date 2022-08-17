import * as React from "react";

function IconMoodAngry({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-angry" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><path d="M8 9l2 1" /><path d="M16 9l-2 1" /><path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" /></svg>;
}

export default IconMoodAngry;
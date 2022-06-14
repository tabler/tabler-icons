import * as React from "react";

function IconSignal5g({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-signal-5g" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 9a1 1 0 0 0 -1 -1h-5a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1" /><path d="M9 8h-5v4h3a2 2 0 1 1 0 4h-3" /></svg>;
}

export default IconSignal5g;
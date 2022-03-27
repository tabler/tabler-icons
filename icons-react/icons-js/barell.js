import * as React from "react";

function IconBarell({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barell" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.222 4h11.556c1.481 2.37 2.222 5.037 2.222 8s-.74 5.63 -2.222 8h-11.556c-1.481 -2.37 -2.222 -5.037 -2.222 -8s.74 -5.63 2.222 -8z" /><path d="M15 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8" /><path d="M9 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8" /><path d="M4.5 16h15" /><path d="M19.5 8h-15" /></svg>;
}

export default IconBarell;
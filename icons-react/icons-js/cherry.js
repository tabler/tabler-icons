import * as React from "react";

function IconCherry({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cherry" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7.5} cy={16.5} r={3.5} /><circle cx={17} cy={18} r={3} /><path d="M9 13c.366 -2.006 1.866 -3.873 4.5 -5.6" /><path d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" /><path d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" /></svg>;
}

export default IconCherry;
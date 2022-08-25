import * as React from "react";

function IconHomeRibbon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-ribbon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5z" /><path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" /></svg>;
}

export default IconHomeRibbon;
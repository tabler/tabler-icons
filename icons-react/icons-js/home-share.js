import * as React from "react";

function IconHomeShare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>;
}

export default IconHomeShare;
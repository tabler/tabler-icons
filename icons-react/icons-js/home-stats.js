import * as React from "react";

function IconHomeStats({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-stats" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.003 10.003l-7.003 -7.003l-9 9h2v7a2 2 0 0 0 2 2h3.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h1" /><circle cx={18} cy={18} r={4} /><path d="M18 14v4h4" /></svg>;
}

export default IconHomeStats;
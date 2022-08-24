import * as React from "react";

function IconHomeExclamation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.66 0 1.247 .32 1.61 .814" /><path d="M20.193 11.193l-8.193 -8.193l-9 9h2v7a2 2 0 0 0 2 2h8" /><path d="M19 15v3" /><path d="M19 21v.01" /></svg>;
}

export default IconHomeExclamation;
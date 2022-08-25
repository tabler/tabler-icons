import * as React from "react";

function IconHomeUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" /><path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h6.344" /><path d="M19 22v-6" /><path d="M22 19l-3 -3l-3 3" /></svg>;
}

export default IconHomeUp;
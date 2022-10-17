import * as React from "react";

function IconBeta({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-beta" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 22v-14a4 4 0 0 1 4 -4h.5a3.5 3.5 0 0 1 0 7h-.5h.5a4.5 4.5 0 1 1 -4.5 4.5v-.5" /></svg>;
}

export default IconBeta;
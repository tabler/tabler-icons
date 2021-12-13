import * as React from "react";

function IconScooter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scooter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={18} cy={17} r={2} /><circle cx={6} cy={17} r={2} /><path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" /></svg>;
}

export default IconScooter;
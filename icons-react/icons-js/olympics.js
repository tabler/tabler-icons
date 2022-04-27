import * as React from "react";

function IconOlympics({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-olympics" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/olympics"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={9} r={3} /><circle cx={18} cy={9} r={3} /><circle cx={12} cy={9} r={3} /><circle cx={9} cy={15} r={3} /><circle cx={15} cy={15} r={3} /></svg>;
}

export default IconOlympics;
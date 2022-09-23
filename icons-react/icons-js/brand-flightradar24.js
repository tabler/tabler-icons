import * as React from "react";

function IconBrandFlightradar24({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-flightradar24" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><circle cx={12} cy={12} r={5} /><path d="M8.5 20l3.5 -8l-6.5 6" /><circle cx={12} cy={12} r={1} /></svg>;
}

export default IconBrandFlightradar24;
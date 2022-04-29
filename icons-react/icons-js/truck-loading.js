import * as React from "react";

function IconTruckLoading({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-loading" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/truck-loading"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" /><rect x={9} y={6} width={10} height={8} rx={3} /><circle cx={9} cy={19} r={2} /><circle cx={18} cy={19} r={2} /></svg>;
}

export default IconTruckLoading;
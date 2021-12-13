import * as React from "react";

function IconBike({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={18} r={3} /><circle cx={19} cy={18} r={3} /><polyline points="12 19 12 15 9 12 14 8 16 11 19 11" /><circle cx={17} cy={5} r={1} /></svg>;
}

export default IconBike;
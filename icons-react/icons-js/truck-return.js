import * as React from "react";

function IconTruckReturn({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-return" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={17} r={2} /><circle cx={17} cy={17} r={2} /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" /><line x1={9} y1={17} x2={15} y2={17} /><path d="M13 6h5l3 5v6h-2" /></svg>;
}

export default IconTruckReturn;
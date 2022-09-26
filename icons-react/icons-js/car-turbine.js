import * as React from "react";

function IconCarTurbine({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car-turbine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={11} cy={13} r={4} /><path d="M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" /><path d="M11 9c2.489 .108 4.489 .108 6 0" /><rect x={17} y={3} width={4} height={8} rx={1} /><path d="M11 13l-3.5 -1.5" /><path d="M11 13l2.5 3" /><path d="M8.5 16l2.5 -3" /><path d="M11 13l3.5 -1.5" /><path d="M11 9v4" /></svg>;
}

export default IconCarTurbine;
import * as React from "react";

function IconChartDots({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3v18h18" /><circle cx={9} cy={9} r={2} /><circle cx={19} cy={7} r={2} /><circle cx={14} cy={15} r={2} /><line x1={10.16} y1={10.62} x2={12.5} y2={13.5} /><path d="M15.088 13.328l2.837 -4.586" /></svg>;
}

export default IconChartDots;
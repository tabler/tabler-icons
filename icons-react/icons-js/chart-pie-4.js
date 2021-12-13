import * as React from "react";

function IconChartPie4({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12l-6.5 5.5" /><path d="M12 3v9h9" /><circle cx={12} cy={12} r={9} /><path d="M12 12l5 7.5" /></svg>;
}

export default IconChartPie4;
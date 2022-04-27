import * as React from "react";

function IconChartDots3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chart-dots-3"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={7} r={2} /><circle cx={16} cy={15} r={2} /><circle cx={18} cy={6} r={3} /><circle cx={6} cy={18} r={3} /><path d="M9 17l5 -1.5" /><path d="M6.5 8.5l7.81 5.37" /><path d="M7 7l8 -1" /></svg>;
}

export default IconChartDots3;
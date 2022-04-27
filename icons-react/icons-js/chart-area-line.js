import * as React from "react";

function IconChartAreaLine({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-area-line" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chart-area-line"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" /><polyline points="4 12 7 8 11 10 16 4 20 8" /></svg>;
}

export default IconChartAreaLine;
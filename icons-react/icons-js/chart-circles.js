import * as React from "react";

function IconChartCircles({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-circles" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chart-circles"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={9.5} cy={9.5} r={5.5} /><circle cx={14.5} cy={14.5} r={5.5} /></svg>;
}

export default IconChartCircles;
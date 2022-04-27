import * as React from "react";

function IconChartRadar({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-radar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/chart-radar"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" /><path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" /><path d="M2.5 10l9.5 3l9.5 -3" /><path d="M12 3v10l6 8" /><path d="M6 21l6 -8" /></svg>;
}

export default IconChartRadar;
import * as React from "react";

function IconReport({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/report"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" /><path d="M18 14v4h4" /><path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" /><rect x={8} y={3} width={6} height={4} rx={2} /><circle cx={18} cy={18} r={4} /><path d="M8 11h4" /><path d="M8 15h3" /></svg>;
}

export default IconReport;
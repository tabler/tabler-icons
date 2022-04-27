import * as React from "react";

function IconApps({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/apps"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={6} height={6} rx={1} /><rect x={4} y={14} width={6} height={6} rx={1} /><rect x={14} y={14} width={6} height={6} rx={1} /><line x1={14} y1={7} x2={20} y2={7} /><line x1={17} y1={4} x2={17} y2={10} /></svg>;
}

export default IconApps;
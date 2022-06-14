import * as React from "react";

function Icon3dCubeSphere({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 17.6l-2 -1.1v-2.5" /><path d="M4 10v-2.5l2 -1.1" /><path d="M10 4.1l2 -1.1l2 1.1" /><path d="M18 6.4l2 1.1v2.5" /><path d="M20 14v2.5l-2 1.12" /><path d="M14 19.9l-2 1.1l-2 -1.1" /><line x1={12} y1={12} x2={14} y2={10.9} /><line x1={18} y1={8.6} x2={20} y2={7.5} /><line x1={12} y1={12} x2={12} y2={14.5} /><line x1={12} y1={18.5} x2={12} y2={21} /><path d="M12 12l-2 -1.12" /><line x1={6} y1={8.6} x2={4} y2={7.5} /></svg>;
}

export default Icon3dCubeSphere;
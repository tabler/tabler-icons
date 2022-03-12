import * as React from "react";

function IconGizmo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gizmo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 19l-8 -5.5l-8 5.5" /><path d="M12 4v9.5" /><circle cx={12} cy={4} r={1} /><circle cx={4} cy={19} r={1} /><circle cx={20} cy={19} r={1} /></svg>;
}

export default IconGizmo;
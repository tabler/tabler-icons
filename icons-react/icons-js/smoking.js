import * as React from "react";

function IconSmoking({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-smoking" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={13} width={18} height={4} rx={1} /><line x1={8} y1={13} x2={8} y2={17} /><path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" /></svg>;
}

export default IconSmoking;
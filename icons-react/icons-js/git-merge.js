import * as React from "react";

function IconGitMerge({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-merge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={18} r={2} /><circle cx={7} cy={6} r={2} /><circle cx={17} cy={12} r={2} /><line x1={7} y1={8} x2={7} y2={16} /><path d="M7 8a4 4 0 0 0 4 4h4" /></svg>;
}

export default IconGitMerge;
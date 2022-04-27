import * as React from "react";

function IconGitCompare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-compare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/git-compare"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={6} r={2} /><circle cx={18} cy={18} r={2} /><path d="M11 6h5a2 2 0 0 1 2 2v8" /><polyline points="14 9 11 6 14 3" /><path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" /><polyline points="10 15 13 18 10 21" /></svg>;
}

export default IconGitCompare;
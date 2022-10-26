import * as React from "react";

function IconGitCherryPick({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-cherry-pick" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={12} r={3} /><path d="M7 3v6" /><path d="M7 15v6" /><path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" /><path d="M17 12h3" /></svg>;
}

export default IconGitCherryPick;
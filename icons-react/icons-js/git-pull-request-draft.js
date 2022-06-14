import * as React from "react";

function IconGitPullRequestDraft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-pull-request-draft" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={18} r={2} /><circle cx={6} cy={6} r={2} /><circle cx={18} cy={18} r={2} /><path d="M6 8v8" /><path d="M18 11h.01" /><path d="M18 6h.01" /></svg>;
}

export default IconGitPullRequestDraft;
import * as React from "react";

function IconBrandGitlab({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-gitlab" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-gitlab"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" /></svg>;
}

export default IconBrandGitlab;
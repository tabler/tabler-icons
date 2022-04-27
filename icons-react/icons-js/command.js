import * as React from "react";

function IconCommand({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-command" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/command"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" /></svg>;
}

export default IconCommand;
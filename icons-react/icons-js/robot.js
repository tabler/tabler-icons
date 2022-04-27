import * as React from "react";

function IconRobot({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/robot"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" /><path d="M10 16h4" /><circle cx={8.5} cy={11.5} r={0.5} fill="currentColor" /><circle cx={15.5} cy={11.5} r={0.5} fill="currentColor" /><path d="M9 7l-1 -4" /><path d="M15 7l1 -4" /></svg>;
}

export default IconRobot;
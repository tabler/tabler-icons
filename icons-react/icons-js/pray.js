import * as React from "react";

function IconPray({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pray" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/pray"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={1} /><path d="M7 20h8l-4 -4v-7l4 3l2 -2" /></svg>;
}

export default IconPray;
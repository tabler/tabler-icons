import * as React from "react";

function IconPills({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pills" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/pills"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={8} cy={8} r={5} /><circle cx={17} cy={17} r={4} /><path d="M4.5 4.5l7 7" /><path d="M19.5 14.5l-5 5" /></svg>;
}

export default IconPills;
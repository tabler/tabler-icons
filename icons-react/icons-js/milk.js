import * as React from "react";

function IconMilk({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-milk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/milk"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 6h8v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1v2z" /><path d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v8.071a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l1.094 -1.759" /><circle cx={12} cy={16} r={2} /><path d="M10 10h4" /></svg>;
}

export default IconMilk;
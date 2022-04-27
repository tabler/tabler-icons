import * as React from "react";

function IconRowInsertTop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-row-insert-top" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/row-insert-top"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /><path d="M12 9v-4" /><line x1={10} y1={7} x2={14} y2={7} /></svg>;
}

export default IconRowInsertTop;
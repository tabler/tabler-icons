import * as React from "react";

function IconNotes({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/notes"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={5} y={3} width={14} height={18} rx={2} /><line x1={9} y1={7} x2={15} y2={7} /><line x1={9} y1={11} x2={15} y2={11} /><line x1={9} y1={15} x2={13} y2={15} /></svg>;
}

export default IconNotes;
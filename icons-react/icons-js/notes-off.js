import * as React from "react";

function IconNotesOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/notes-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" /><path d="M11 7h4" /><path d="M9 11h2" /><path d="M9 15h4" /><path d="M3 3l18 18" /></svg>;
}

export default IconNotesOff;
import * as React from "react";

function IconNoteOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-note-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/note-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 20l3.505 -3.505m1.994 -1.994l1.501 -1.501" /><path d="M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.427 .6c-.355 .36 -.573 .853 -.573 1.4v12a2 2 0 0 0 2 2h7v-6c0 -.272 .109 -.519 .285 -.699" /><path d="M3 3l18 18" /></svg>;
}

export default IconNoteOff;
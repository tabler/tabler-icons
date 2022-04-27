import * as React from "react";

function IconPencil({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/pencil"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" /><line x1={13.5} y1={6.5} x2={17.5} y2={10.5} /></svg>;
}

export default IconPencil;
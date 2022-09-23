import * as React from "react";

function IconMoustache({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moustache" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 9a3 3 0 0 1 2.599 1.5h.001c.933 1.333 2.133 1.556 3.126 1.556l.291 -.006l.77 -.044l.213 -.006c-.963 1.926 -3.163 2.925 -6.6 2.996l-.4 .004l-.165 -.005a3 3 0 0 1 .165 -5.995z" /><path d="M9 9a3 3 0 0 0 -2.599 1.5h-.001c-.933 1.333 -2.133 1.556 -3.126 1.556l-.291 -.006l-.77 -.044l-.213 -.006c.963 1.926 3.163 2.925 6.6 2.996l.4 .004l.165 -.005a3 3 0 0 0 -.165 -5.995z" /></svg>;
}

export default IconMoustache;
import * as React from "react";

function IconUrgent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-urgent" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/urgent"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16v-4a4 4 0 0 1 8 0v4" /><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><rect x={6} y={16} width={12} height={4} rx={1} /></svg>;
}

export default IconUrgent;
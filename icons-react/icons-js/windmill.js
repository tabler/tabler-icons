import * as React from "react";

function IconWindmill({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-windmill" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/windmill"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z" /><path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z" /><path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z" /><path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z" /></svg>;
}

export default IconWindmill;
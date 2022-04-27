import * as React from "react";

function IconRoute({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-route" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/route"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={19} r={2} /><circle cx={18} cy={5} r={2} /><path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" /></svg>;
}

export default IconRoute;
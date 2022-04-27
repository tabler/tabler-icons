import * as React from "react";

function IconNetwork({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-network" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/network"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={9} r={6} /><path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" /><path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" /><path d="M6 9h12" /><path d="M3 19h7" /><path d="M14 19h7" /><circle cx={12} cy={19} r={2} /><path d="M12 15v2" /></svg>;
}

export default IconNetwork;
import * as React from "react";

function IconCircleHalf2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-half-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/circle-half-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M12 3v18" /><path d="M12 14l7 -7" /><path d="M12 19l8.5 -8.5" /><path d="M12 9l4.5 -4.5" /></svg>;
}

export default IconCircleHalf2;
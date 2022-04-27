import * as React from "react";

function IconZoomMoney({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-money" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/zoom-money"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={10} r={7} /><path d="M21 21l-6 -6" /><path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M10 13v1m0 -8v1" /></svg>;
}

export default IconZoomMoney;
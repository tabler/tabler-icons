import * as React from "react";

function IconBarrierBlock({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barrier-block" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/barrier-block"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={7} width={16} height={9} rx={1} /><path d="M7 16v4" /><path d="M7.5 16l9 -9" /><path d="M13.5 16l6.5 -6.5" /><path d="M4 13.5l6.5 -6.5" /><path d="M17 16v4" /><path d="M5 20h4" /><path d="M15 20h4" /><path d="M17 7v-2" /><path d="M7 7v-2" /></svg>;
}

export default IconBarrierBlock;
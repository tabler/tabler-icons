import * as React from "react";

function IconMessagesOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={3} x2={21} y2={21} /><path d="M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>;
}

export default IconMessagesOff;
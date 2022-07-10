import * as React from "react";

function IconLogicBuffer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logic-buffer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12h-5" /><path d="M2 9h5" /><path d="M2 15h5" /><path d="M7 5l10 7l-10 7z" /></svg>;
}

export default IconLogicBuffer;
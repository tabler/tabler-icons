import * as React from "react";

function IconMacro({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-macro" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15a6 6 0 1 0 12 0" /><path d="M18 15a6 6 0 0 0 -6 6" /><path d="M12 21a6 6 0 0 0 -6 -6" /><path d="M12 21v-10" /><path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z" /></svg>;
}

export default IconMacro;
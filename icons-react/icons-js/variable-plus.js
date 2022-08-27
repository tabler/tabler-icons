import * as React from "react";

function IconVariablePlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-variable-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.38 2.76 1.998 5.52 1.855 8.448m-11.855 -3.448h1c1 0 1 1 2.016 3.527c.785 1.972 .944 3.008 1.483 3.346" /><path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>;
}

export default IconVariablePlus;
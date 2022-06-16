import * as React from "react";

function IconSchema({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-schema" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 2h5v4h-5z" /><path d="M15 10h5v4h-5z" /><path d="M5 18h5v4h-5z" /><path d="M5 10h5v4h-5z" /><path d="M10 12h5" /><path d="M7.5 6v4" /><path d="M7.5 14v4" /></svg>;
}

export default IconSchema;
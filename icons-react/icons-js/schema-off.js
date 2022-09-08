import * as React from "react";

function IconSchemaOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-schema-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2h4v4m-4 0h-1v-1" /><path d="M15 11v-1h5v4h-2" /><path d="M5 18h5v4h-5z" /><path d="M5 10h5v4h-5z" /><path d="M10 12h2" /><path d="M7.5 7.5v2.5" /><path d="M7.5 14v4" /><path d="M3 3l18 18" /></svg>;
}

export default IconSchemaOff;
import * as React from "react";

function IconTrident({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trident" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" /><path d="M12 21v-18l-2 2m4 0l-2 -2" /></svg>;
}

export default IconTrident;
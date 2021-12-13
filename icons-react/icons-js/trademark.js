import * as React from "react";

function IconTrademark({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trademark" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.5 9h5m-2.5 0v6" /><path d="M13 15v-6l3 4l3 -4v6" /></svg>;
}

export default IconTrademark;
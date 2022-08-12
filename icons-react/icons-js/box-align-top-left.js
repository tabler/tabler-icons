import * as React from "react";

function IconBoxAlignTopLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-align-top-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.005 5.005v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1z" /><path d="M15.005 4.005h-.01" /><path d="M20.005 4.005h-.01" /><path d="M20.005 9.005h-.01" /><path d="M20.005 15.005h-.01" /><path d="M4.005 15.005h-.01" /><path d="M20.005 20.005h-.01" /><path d="M15.005 20.005h-.01" /><path d="M9.005 20.005h-.01" /><path d="M4.005 20.005h-.01" /></svg>;
}

export default IconBoxAlignTopLeft;
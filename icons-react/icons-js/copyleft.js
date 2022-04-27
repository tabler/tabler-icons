import * as React from "react";

function IconCopyleft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copyleft" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/copyleft"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M10 9.75a3.016 3.016 0 0 1 4.163 .173a2.993 2.993 0 0 1 0 4.154a3.016 3.016 0 0 1 -4.163 .173" /></svg>;
}

export default IconCopyleft;
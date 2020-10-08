import * as React from "react";

function IconTag({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-tag" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1 -2 0l-9 -9v-4a4 4 0 0 1 4 -4h4" /><circle cx={9} cy={9} r={2} /></svg>;
}

export default IconTag;
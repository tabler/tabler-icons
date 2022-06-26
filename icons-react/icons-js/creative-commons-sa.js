import * as React from "react";

function IconCreativeCommonsSa({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-creative-commons-sa" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M12 16a4 4 0 1 0 -4 -4v1" /><path d="M6 12l2 2l2 -2" /></svg>;
}

export default IconCreativeCommonsSa;
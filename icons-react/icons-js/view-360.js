import * as React from "react";

function IconView360({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-view-360" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/view-360"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><ellipse cx={12} cy={12} rx={4} ry={9} /><ellipse cx={12} cy={12} rx={4} ry={9} transform="rotate(90 12 12)" /></svg>;
}

export default IconView360;
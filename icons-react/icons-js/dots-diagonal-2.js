import * as React from "react";

function IconDotsDiagonal2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-diagonal-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={7} r={1} /><circle cx={12} cy={12} r={1} /><circle cx={17} cy={17} r={1} /></svg>;
}

export default IconDotsDiagonal2;
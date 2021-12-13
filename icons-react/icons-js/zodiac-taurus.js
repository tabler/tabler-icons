import * as React from "react";

function IconZodiacTaurus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-taurus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 3a6 6 0 0 0 12 0" /><circle cx={12} cy={15} r={6} /></svg>;
}

export default IconZodiacTaurus;
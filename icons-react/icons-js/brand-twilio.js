import * as React from "react";

function IconBrandTwilio({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twilio" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><circle cx={9} cy={9} r={1} /><circle cx={15} cy={9} r={1} /><circle cx={15} cy={15} r={1} /><circle cx={9} cy={15} r={1} /></svg>;
}

export default IconBrandTwilio;
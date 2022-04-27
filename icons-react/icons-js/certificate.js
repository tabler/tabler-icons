import * as React from "react";

function IconCertificate({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/certificate"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={15} cy={15} r={3} /><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /><line x1={6} y1={9} x2={18} y2={9} /><line x1={6} y1={12} x2={9} y2={12} /><line x1={6} y1={15} x2={8} y2={15} /></svg>;
}

export default IconCertificate;
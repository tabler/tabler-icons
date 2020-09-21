import * as React from "react";

const IconH2 = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-h-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={5} x2={3} y2={19} /><line x1={3} y1={12} x2={12} y2={12} /><line x1={12} y1={5} x2={12} y2={19} /><path d="M21 19h-5l4.47 -5.96a2.5 2.5 0 1 0 -4.47 -1.54" /></svg>;

export default IconH2;
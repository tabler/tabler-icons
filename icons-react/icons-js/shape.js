import * as React from "react";

const IconShape = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-shape" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={6} r={2} /><circle cx={18} cy={6} r={2} /><circle cx={6} cy={18} r={2} /><circle cx={18} cy={18} r={2} /><line x1={6} y1={8} x2={6} y2={16} /><line x1={8} y1={6} x2={16} y2={6} /><line x1={8} y1={18} x2={16} y2={18} /><line x1={18} y1={8} x2={18} y2={16} /></svg>;

export default IconShape;